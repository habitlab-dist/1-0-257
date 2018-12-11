window.habitlab_content_script = true;

(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/components/call-to-action-button.deps.js":function(t,o,n){const{import_dom_modules:e}=n("./src/libs_frontend/dom_utils.ls");n("./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js"),e(n("./src/components/call-to-action-button.html"),"components/call-to-action-button.html"),n("./src/components/call-to-action-button.js")},"./src/components/call-to-action-button.html":function(t,o){t.exports="<link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=call-to-action-button> <template> <style>:host{display:var(--call-to-action-button-display,inline-block);min-height:var(--call-to-action-button-min-height,38px);width:var(--call-to-action-button-width);margin:var(--call-to-action-button-margin,0 0 0 0)}.call-to-action-button{cursor:pointer;color:var(--call-to-action-button-color,#fff);background-color:var(--call-to-action-button-bg-color,#415D67);margin:0 auto;width:100%;height:100%;box-shadow:var(--call-to-action-button-shadow,2px 2px 2px #888)}</style> <habitlab-paper-button class=call-to-action-button on-click=buttonClicked>{{buttonText}}</habitlab-paper-button> </template> <script src=call-to-action-button.js><\/script> </habitlab-dom-module>"},"./src/components/call-to-action-button.js":function(t,o,n){const{polymer_ext:e}=n("./src/libs_frontend/polymer_utils.ls"),{log_action:i}=n("./src/libs_frontend/intervention_log_utils.ls"),{get_intervention:l,get_goal_info:s}=n("./src/libs_common/intervention_info.ls"),{close_tab_with_id:c}=n("./src/generated_libs/libs_frontend/tab_utils.js"),{get_tab_id:a}=n("./src/libs_common/intervention_info.ls"),{get_intervention_info:r}=n("./src/generated_libs/libs_frontend/intervention_utils.js");e({is:"call-to-action-button",properties:{goal:{type:Object},buttonText:{type:String,computed:"computeButtonText(goal)"}},ready:function(){this.goal=s()},buttonClicked:function(){if(this.goal.is_positive){i({positive:"habitlab-positive-goal-site-button clicked"});var t=this.goal.domain;-1==t.search("http")&&(t="https://"+t),window.location.href=t}else i({positive:"habitlab-close-tab-button clicked"}),c(a())},computeButtonText:function(t){return null!=t.call_to_action?t.call_to_action:t.is_positive?t.description:"Close "+l().sitename_printable}})},"./src/components/removed-clickbait-message.deps.js":function(t,o,n){const{import_dom_modules:e}=n("./src/libs_frontend/dom_utils.ls");n("./src/bower_components/polymer/polymer.deps.js"),n("./src/components/call-to-action-button.deps.js"),n("./src/components/habitlab-logo-v2.deps.js"),e(n("./src/components/removed-clickbait-message.html"),"components/removed-clickbait-message.html"),n("./src/components/removed-clickbait-message.js")},"./src/components/removed-clickbait-message.html":function(t,o){t.exports="<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=call-to-action-button.html> <link rel=import href=habitlab-logo-v2.html> <habitlab-dom-module id=removed-clickbait-message> <template> <style>:host{display:inline-block}#displayText{background-color:#95CBEE;fill-opacity:.5;color:#415D67;width:500px;height:120px;z-index:99;font-size:1em;padding:3px}.habitlab_button_container{margin-top:20px}</style> <div id=displayText> <div class=habitlab_button_container style=text-align:center> <span style=font-size:20px>HabitLab has removed clickbait</span> <div style=margin-top:18px;display:flex;align-content:space-around;align-items:center;justify-content:center> <call-to-action-button style=margin-right:15px;height:40px></call-to-action-button> <habitlab-logo-v2 style=height:40px></habitlab-logo-v2> </div> </div> </div> </template> <script src=removed-clickbait-message.js><\/script> </habitlab-dom-module>"},"./src/components/removed-clickbait-message.js":function(t,o,n){const{polymer_ext:e}=n("./src/libs_frontend/polymer_utils.ls");e({is:"removed-clickbait-message"})}}]);