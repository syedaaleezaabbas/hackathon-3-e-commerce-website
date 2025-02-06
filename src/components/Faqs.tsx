import React from 'react';

const PricingFAQs = () => {
    // Store the FAQ data in a variable
    const faqs = [
        {
            id: '1',
            title: 'The quick fox jumps over the lazy dog',
            description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.'
        },
        {
            id: '2',
            title: 'The quick fox jumps over the lazy dog',
            description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.'
        },
        {
            id: '3',
            title: 'The quick fox jumps over the lazy dog',
            description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.'
        },
        {
            id: '4',
            title: 'The quick fox jumps over the lazy dog',
            description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.'
        },
        {
            id: '5',
            title: 'The quick fox jumps over the lazy dog',
            description: 'IMet minim Mollie non desert Alamo est sit cliquey dolor do met sent.'
        },
        {
            id: '6',
            title: 'The quick fox jumps over the lazy dog',
            description: 'CMet minim Mollie non desert Alamo est sit cliquey dolor do met sent.'
        }
    ];

    // Use map to render the FAQ items
    const faqItems = faqs.map(faq => (
        <div key={faq.id} className="flex items-start gap-4">
            <div className="text-blue-500 text-lg">➤</div>
            <div>
                <h4 className="font-bold text-gray-800">{faq.title}</h4>
                <p className="text-gray-600 mt-1">{faq.description}</p>
            </div>
        </div>
    ));

    return (
        <div className="max-w-5xl mx-auto mt-20 px-4">
            <h3 className="text-3xl text-[#252B42] font-bold mb-4 text-center">Pricing FAQs</h3>
            <p className="text-[#737373] text-center mb-24">
                Problems trying to resolve the conflict between<br /> the two major realms of Classical physics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqItems}
            </div>
            <p className="text-[#737373] text-lg font-semibold text-center mt-10">
                {"Haven't"} got your answer? Contact our support
            </p>
        </div>
    );
};

export default PricingFAQs;