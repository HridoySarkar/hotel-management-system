(function () {
    let options = {
        facebook: "#", // Facebook page ID
        whatsapp: "+442039809360", // WhatsApp number
        call_to_action: "Message Us", // Call to action
        button_color: "#C6A34F", // Color of button
        position: "left", // Position may be 'right' or 'left'
        order: "facebook,whatsapp", // Order of buttons
    };
    let proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
    };
    let x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();