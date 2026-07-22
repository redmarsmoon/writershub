tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-subtle": "#f8fafc",
                "on-primary-fixed-variant": "#004395",
                "surface-variant": "#dee2ec",
                "primary": "#00408e",
                "surface": "#f8f9ff",
                "on-tertiary-fixed": "#311300",
                "text-muted": "#64748b",
                "on-primary": "#ffffff",
                "surface-container": "#eaeef8",
                "secondary-container": "#ff8c61",
                "on-tertiary-container": "#ffc6a4",
                "surface-bright": "#f8f9ff",
                "primary-fixed-dim": "#aec6ff",
                "tertiary-fixed": "#ffdbc7",
                "tertiary-fixed-dim": "#ffb688",
                "outline-variant": "#c3c6d3",
                "accent-vibrant": "#ff6b35",
                "inverse-on-surface": "#edf1fb",
                "outline": "#737783",
                "border-low-contrast": "#e2e8f0",
                "inverse-surface": "#2c3138",
                "on-error": "#ffffff",
                "tertiary": "#6d3200",
                "on-tertiary-fixed-variant": "#733500",
                "on-error-container": "#93000a",
                "primary-container": "#2558ab",
                "on-secondary-fixed-variant": "#7e2b07",
                "secondary-fixed": "#ffdbcf",
                "secondary": "#9e421d",
                "on-surface": "#171c23",
                "on-tertiary": "#ffffff",
                "on-secondary-fixed": "#380d00",
                "surface-container-highest": "#dee2ec",
                "secondary-fixed-dim": "#ffb59b",
                "primary-fixed": "#d8e2ff",
                "on-secondary": "#ffffff",
                "surface-container-low": "#f0f4fe",
                "on-surface-variant": "#434752",
                "on-secondary-container": "#742401",
                "tertiary-container": "#914500",
                "surface-container-high": "#e4e8f2",
                "on-primary-fixed": "#001a42",
                "surface-elevated": "#ffffff",
                "error": "#ba1a1a",
                "surface-tint": "#2a5caf",
                "inverse-primary": "#aec6ff",
                "background": "#f8f9ff",
                "on-primary-container": "#c0d2ff",
                "surface-dim": "#d6dae4",
                "error-container": "#ffdad6",
                "surface-container-lowest": "#ffffff",
                "on-background": "#171c23"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "container-max": "1280px",
                "stack-lg": "32px",
                "gutter": "24px",
                "margin-mobile": "16px",
                "section-padding": "80px",
                "stack-sm": "8px",
                "stack-md": "16px"
            },
            "maxWidth": {
                "container-max": "1280px"
            },
            "fontFamily": {
                "display-lg": ["Montserrat"],
                "body-md": ["Montserrat"],
                "label-lg": ["Montserrat"],
                "headline-md": ["Montserrat"],
                "headline-lg-mobile": ["Montserrat"],
                "button": ["Montserrat"],
                "headline-lg": ["Montserrat"],
                "body-lg": ["Montserrat"]
            },
            "fontSize": {
                "display-lg": ["56px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "label-lg": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "600"}],
                "headline-md": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "button": ["16px", {"lineHeight": "1", "letterSpacing": "0.01em", "fontWeight": "600"}],
                "headline-lg": ["40px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
        }
    }
};
