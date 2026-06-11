// DevToolBox Analytics
// Replace GA_MEASUREMENT_ID with your actual Google Analytics 4 Measurement ID
// To get one: https://analytics.google.com → Create Property → Get Measurement ID (G-XXXXXXXXXX)
(function() {
    var GA_ID = 'G-XXXXXXXXXX'; // TODO: Replace with real GA4 Measurement ID

    // Don't load analytics in development/localhost
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;
    if (GA_ID === 'G-XXXXXXXXXX') return; // Skip if not configured yet

    // Load gtag.js
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, {
        send_page_view: true,
        cookie_flags: 'SameSite=None;Secure'
    });

    // Track tool usage events
    window.trackToolUse = function(toolName, action) {
        gtag('event', 'tool_use', {
            tool_name: toolName,
            action: action
        });
    };
})();
