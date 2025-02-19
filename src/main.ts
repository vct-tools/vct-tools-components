import { App } from "vue";

import UIButton from "./UIElement/UIButton.vue";
import UIButtonLabel from "./UIElement/UIButtonLabel.vue";
import UIButtonIcon from "./UIElement/UIButtonIcon.vue";
import UIField from "./UIElement/UIField.vue";
import UILargeButton from "./UIElement/UILargeButton.vue";
import UISelect from "./UIElement/UISelect.vue";
import UISwitch from "./UIElement/UISwitch.vue";
import UIThrobber from "./UIElement/UIThrobber.vue";
import UIDialogBox from "./UIElement/UIDialogBox.vue";
import { overwolfAgentToName, overwolfMapToName, overwolfWeaponToName } from "./overwolfCompat";

import agents from "./agents";
import { Role, roleImages } from "./agents";

import { maps, sides } from "./maps";

export {
  UIButton,
  UIButtonLabel,
  UIButtonIcon,
  UIField,
  UILargeButton,
  UISelect,
  UISwitch,
  UIThrobber,
  UIDialogBox,
  agents,
  Role,
  roleImages,
  maps,
  sides,
  overwolfAgentToName,
  overwolfMapToName,
  overwolfWeaponToName
};

export default {
  install(app: App) {
    app.component("UIButton", UIButton);
    app.component("UIButtonLabel", UIButtonLabel);
    app.component("UIButtonIcon", UIButtonIcon);
    app.component("UIField", UIField);
    app.component("UILargeButton", UILargeButton);
    app.component("UISelect", UISelect);
    app.component("UISwitch", UISwitch);
    app.component("UIThrobber", UIThrobber);
    app.component("UIDialogBox", UIDialogBox);
  },
};
