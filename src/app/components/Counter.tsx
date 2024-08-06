import React, { useEffect, useRef } from 'react';

const animateCounter = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const Counter = () => {
    const counterRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = counterRef.current.querySelectorAll('.running-num');
                    elements.forEach((element) => {
                        if (!element.hasAttribute('data-animated')) {
                            const endValue = parseInt(element.getAttribute('data-end'), 10);
                            animateCounter(element, 0, endValue, 2000);
                            element.setAttribute('data-animated', 'true');
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={counterRef} className='footer-left flex lg:gap-0 gap-2 lg:flex-row flex-col items-start lg:w-4/6 lg:pr-10'>
            <h6 className='font-semibold text-lg lg:w-1/4 pr-10'>
                <span className='running-num' data-end="24859684">0</span>+ LEADS DRIVEN FOR CLIENTS
            </h6>
            <h6 className='font-semibold text-lg lg:w-1/4 pr-10'>
                <span className='running-num' data-end="10085355239">0</span>+ REVENUE DRIVEN FOR CLIENTS
            </h6>
            <h6 className='font-semibold text-lg lg:w-1/4 pr-10'>
                <span className='running-num' data-end="100">0</span>+ EXPERTS ON STAFF
            </h6>
            <h6 className='font-semibold text-lg lg:w-1/4 pr-10'>
                <span className='running-num' data-end="3212407">0</span> HOURS OF EXPERTISE
            </h6>
        </div>
    );
};

export default Counter;
