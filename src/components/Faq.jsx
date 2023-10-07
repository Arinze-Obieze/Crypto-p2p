import React, { useState } from 'react';

const Faq = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };

    const accordionItems = [
        {
            title: 'How do i trade ?',
            content:
                'lorem ipsum loreemorem ipsum loreemorem ipsum loreemorem ipsum loreemorem ipsum loreem',
        },
        {
            title: 'Are there scammers?',
            content:
                'lorem ipsum loreemorem ipsum loreemorem ipsum loreemorem ipsum loreemorem ipsum loreem',
        },
        {
            title: 'lorem ipsum lorem ipsum ?',
            content:
                'lorem ipsum loreemorem ipsum loreemorem ipsum loreemorem ipsum loreemorem ipsum loreem',
        },
    ];

    return (
        <div id="accordion-collapse" data-accordion="collapse">
            {accordionItems.map((item, index) => (
                <div key={index}>
                    <h2 id={`accordion-collapse-heading-${index}`}>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 ${activeAccordion === index ? 'active' : ''
                                }`}
                            data-accordion-target={`#accordion-collapse-body-${index}`}
                            aria-expanded={activeAccordion === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 rotate-180 shrink-0 ${activeAccordion === index ? 'rotate-0' : 'rotate-180'
                                    }`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-collapse-body-${index}`}
                        className={`${activeAccordion === index ? 'block' : 'hidden'
                            } p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
                        aria-labelledby={`accordion-collapse-heading-${index}`}
                    >
                        <p className="mb-2 text-gray-500 dark:text-gray-400">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
