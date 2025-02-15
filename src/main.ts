import { App } from "vue";

import UIButton from "./UIElement/UIButton.vue";
import UIButtonLabel from "./UIElement/UIButtonLabel.vue";
import UIButtonIcon from "./UIElement/UIButtonIcon.vue";
import UIField from "./UIElement/UIField.vue";
import UILargeButton from "./UIElement/UILargeButton.vue";
import UISelect from "./UIElement/UISelect.vue";
import UIThrobber from "./UIElement/UIThrobber.vue";

export { UIButton, UIButtonLabel, UIButtonIcon, UIField, UILargeButton, UISelect, UIThrobber };
export default {
    install(app: App) {
        app.component("UIButton", UIButton);
        app.component("UIButtonLabel", UIButtonLabel);
        app.component("UIButtonIcon", UIButtonIcon);
        app.component("UIField", UIField);
        app.component("UILargeButton", UILargeButton);
        app.component("UISelect", UISelect);
        app.component("UIThrobber", UIThrobber);
    }
}