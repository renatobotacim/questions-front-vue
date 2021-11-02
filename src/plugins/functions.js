import Vue from "vue";
import bus from "@/plugins/bus";

Vue.prototype.$showAlert = function(message, type, timeout = null) {
  bus.$emit("alert", { message, type, timeout });
};