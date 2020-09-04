import React, {Component} from 'react';
import {
    Layout,
    AccountConnection,
    Link,
    Card,
    Checkbox,
    TextField,
    Stack,
    Select,
    ChoiceList,
    VisuallyHidden,
    Heading,
    FormLayout,
    PageActions,
} from '@shopify/polaris'

class SettingsForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            connected :false,
            autoPublish: false,
            pricingRuleMethod: 'Multiplier',
            pricinModifier: '1',
            trackingUrl: '',
            emailfulfillment: true,
            reportingEmailFrequency: ['Weekly']
        }
    }
    render() {
        const PricingRuleInput = (
            <Select
                label='Pricing rule method'
                labelHidden
                options={['Multiplier','Fixed markup']}
                value={this.state.pricingRuleMethod}
                onChange={this.handleInputChange('pricingRuleMethod')}
            />
        )
        return(
            <form onSubmit={this.handleForsubmit.bind(this)}>
                <Layout>
                <Layout.AnnotatedSection
                    title="Connected User"
                    description="Shopify and your customers will use this information to contact you."
                >
                {this.accountConnectionMarkup()}
                </Layout.AnnotatedSection>

                <Layout.AnnotatedSection 
                    title="Selling and shipping"
                    description="Manage products, pricing, shipping and customer ntifications."
                >
                    <Card sectioned title="Products" >
                        <Checkbox
                            label="Automatically publish new products"
                            helpText="New products add in DropShipp will immediately be published to all of your Shopify sales channels."
                            checked={this.state.autoPublish}
                            onChange={this.handleInputChange('autoPublish')}
                            />
                    </Card>
                    <Card sectioned title="Pricing rules">
                        <Stack alignment="baseline">
                            <span>Product list price *</span>
                            <span>Your Cost</span>
                            <div style={{maxWidth: 200}}>
                                <TextField 
                                connectedLeft={PricingRuleInput}
                                value={this.state.pricingModifier}
                                onChange={this.handleInputChange('pricingModifier')}
                                />
                            </div>
                        </Stack>
                    </Card>
                    <Card sectioned title="Shipping">
                        <FormLayout>
                                <Checkbox
                                label="Email customers when orders are fulfilled"
                                checked={this.state.emailfulfillment}
                                onChange={this.handleInputChange('autoShip')}
                                />
                                
                                <TextField 
                                value={this.state.trackingUrl}
                                onChange={this.handleInputChange('trackingUrl')}
                                label="Custom Shipment tracking URL" 
                                helpText={
                                    <span>Overrides the normal shipment tracking link enabled to your Customer.<Link>Learn more about 
                                custom tracking URLs.</Link></span>}
                                />
                            </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>

                <Layout.AnnotatedSection 
                    title="Reporting"
                    description="Manage how you track success with Dropshipp"
                >
                    <Card sectioned >
                        <VisuallyHidden><Heading>Reporting Details</Heading></VisuallyHidden>
                        <ChoiceList
                            title="Receive reportsw via email:"
                            choices={[
                                { label: 'Never', value: 'Never'},
                                { label: 'Daily', value: 'Daily'},
                                { label: 'Weekly', value: 'Weekly'},
                                { label: 'Monthly', value: 'Monthly'},
                            ]}
                            selected=
                            {this.state.reportingEmailFrequency}
                            onChange={this.handleInputChange('this.handleInputChange')}
                        />
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.Section>
                    <PageActions
                        primaryAction={{
                            content: 'Save',
                            submit: true,
                        }}
                    />
                </Layout.Section>
                </Layout>
            </form>
        );
    }

    toggleConnection(){
        this.setState(({connected}) => ({connected : !connected}));
    }

    handleInputChange(field){
        return (value) => this.setState({[field]: value})
    }

    handleForsubmit(evt){
        evt.preventDefault();
        console.log(this.state);
    }
    accountConnectionMarkup(){
        return this.state.connected
        ?(

            <AccountConnection 
                avatarUrl=""
                accountName="XYZ"
                details="xyz.com"
                action={{content: 'Disconnect', onAction: this.toggleConnection.bind(this)}}
                connected={this.state.connected}/>
        ):(
            <AccountConnection
                title="Dropshipp"
                action={{content: 'Connect', onAction: this.toggleConnection.bind(this)}}
                connected={this.state.connected}
                details='No account Connected'
                termsOfService={<p>
                    By clicking <strong>Connect</strong>, you agree to accept Sample App’s{' '}
                   <Link url="#">terms and conditions</Link>. You’ll pay a
                   commission rate of 15% on sales made through Dropshhip.
               </p>}/>
        )
    }
}

export default SettingsForm;