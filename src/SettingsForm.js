import React, {Component} from 'react';
import {
    Layout,
    AccountConnection,
    Link,
    Card,
    Checkbox,
    TextField,
    RadioButton,
    Stack
} from '@shopify/polaris'

class SettingsForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            connected :false,
            autoPublish: false,
        }
    }
    render() {
        return(
            <form>
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
                    <Card sectioned title="Pricing rules"></Card>
                    <Card sectioned title="Shipping">
                    <Checkbox
                            label="Automatically publish new products"
                            helpText="New products add in DropShipp will immediately be published to all of your Shopify sales channels."
                            checked={this.state.autoShip}
                            onChange={this.handleInputChange('autoShip')}
                            />
                            <TextField 
                            label="Custom Shipment tracking URL" 
                            helpText="Overrides the normal shipment tracking link enabled to your Customer.Learn more about 
                            custom tracking URLs."
                            />
                    </Card>
                </Layout.AnnotatedSection>

                <Layout.AnnotatedSection 
                    title="Reporting"
                    description="Manage how you track success with Dropshipp"
                >
                    <Card sectioned title="Receive reports via email:">
                        <Stack vertical>
                        <RadioButton
                            label="Never"
                            id="never"
                        />
                        <RadioButton
                            label="Daily"
                            id="daily"
                        />
                        <RadioButton
                            label="Weekly"
                            id="weekly"
                        />
                        <RadioButton
                            label="Monthly"
                            id="monthly"
                        />
                        </Stack>
                    </Card>
                </Layout.AnnotatedSection>
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