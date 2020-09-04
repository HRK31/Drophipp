import React, {Component} from 'react';
import {
    Layout,
    AccountConnection,
    Link
} from '@shopify/polaris'

class SettingsForm extends Component{
    render() {
        return(
            <Layout>
            <Layout.AnnotatedSection
                title="Connected User"
                description="Shopify and your customers will use this information to contact you."
            >
            <AccountConnection
            title="Dropshhip"
            action={{
                content: "Connect"
            }}
            details="No account Connected"
            termsOfService={<p>
                 By clicking <strong>Connect</strong>, you agree to accept Sample App’s{' '}
                <Link url="#">terms and conditions</Link>. You’ll pay a
                commission rate of 15% on sales made through Dropshhip.
            </p>}
            /> 
            </Layout.AnnotatedSection>
            </Layout>
        );
    }
}

export default SettingsForm;