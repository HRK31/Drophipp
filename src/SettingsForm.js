import React, {Component} from 'react';
import {
    Layout,
    AccountConnection,
    Link
} from '@shopify/polaris'

class SettingsForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            connected :false
        }
    }
    render() {
        return(
            <Layout>
            <Layout.AnnotatedSection
                title="Connected User"
                description="Shopify and your customers will use this information to contact you."
            >
            {this.accountConnectionMarkup()}
            </Layout.AnnotatedSection>
            </Layout>
        );
    }

    toggleConnection(){
        this.setState(({connected}) => ({connected : !connected}));
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