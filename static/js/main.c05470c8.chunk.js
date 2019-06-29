(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=(a(28),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),d=a(10),h=a(21),p=a.n(h),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).inputRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"performSearch",value:function(e){var t=e.formatted_address.split(",")[0];this.props.place(t),this.props.handleForecastData(t),this.props.handleCurrentForecastData(null),this.inputRef.current.refs.input.value=""}},{key:"render",value:function(){return r.a.createElement("div",{className:"search-block"},r.a.createElement("button",{className:"add-to-favourite"}),r.a.createElement(p.a,{className:"main-search-input",onPlaceSelected:this.performSearch.bind(this),autoFocus:!0,ref:this.inputRef}),r.a.createElement("select",{className:"temperature-units"},r.a.createElement("option",{value:"Celsius"},"\xb0C"),r.a.createElement("option",{value:"Farengheit"},"\xb0F")))}}]),t}(n.Component),v="c1bfe9b98646ae15af74164518f99538",E=function(e){if(e)return"01d"===e||"01n"===e?"day-forecast-weather-sunny":"02d"===e||"02n"===e?"day-forecast-weather-cloudy-small":"03d"===e||"04d"===e||"50d"===e||"03n"===e||"04n"===e||"50n"===e?"day-forecast-weather-cloudy":"09d"===e||"09n"===e?"day-forecast-weather-shower-rain":"10d"===e||"10n"===e?"day-forecast-weather-rain":"11d"===e||"11n"===e?"day-forecast-weather-thunder":"13d"===e||"13n"===e?"day-forecast-weather-snow":""},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long";return new Intl.DateTimeFormat("en-US",{weekday:t}).format(1e3*e)},b=function(e,t){if(e)return"C"===t?"".concat(Math.round(e)," \xb0C"):"".concat(Math.round(1.8*e+32)," \xb0F")},O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderTemplate",value:function(){var e,t,a,n=this.props.forecastData,c=n.name,i=n.dt,o=n.main,s=n.wind,l=n.weather,u="weather-icon-current ".concat(E(l[0].icon));return r.a.createElement("div",{className:"forecast-current"},r.a.createElement("div",{className:"city-name"},c),r.a.createElement("div",{className:"forecast-details"},r.a.createElement("div",{className:"forecast-item"},r.a.createElement("div",{className:"forecast-item-text forecast-item-text-day"},y(i)),r.a.createElement("div",{className:"forecast-item-text forecast-item-text-icon forecast-item-text-icon-date"},function(e){if(e){var t=new Date(e);return new Intl.DateTimeFormat("en-GB").format(1e3*t)}}(i)),r.a.createElement("div",{className:"forecast-item-text forecast-item-text-icon forecast-item-text-icon-pressure"},"".concat((a=o.pressure)?Math.round(.75006*a):""," mm Hg")),r.a.createElement("div",{className:"forecast-item-text forecast-item-text-icon forecast-item-text-icon-wind"},"".concat((e=s.speed,e?"C"===t?"".concat(e.toFixed(1)," m/s"):"".concat((2.2369*e).toFixed(1)," mph"):""),", ").concat(function(e){var t="";return e?(e<=22.5||e>337.5&&e<=360?t="North":e>22.5&&e<67.5?t="North-East":e>67.5&&e<112.5?t="East":e>112.5&&e<157.5?t="South-East":e>157.5&&e<202.5?t="South":e>202.5&&e<247.5?t="South-West":e>247.5&&e<292.5?t="West":e>292.5&&e<337.5&&(t="North-West"),t):""}(s.deg))),r.a.createElement("div",{className:"forecast-item-text forecast-item-text-icon forecast-item-text-icon-humidity"},r.a.createElement("span",{className:"humidity-icon"}),o.humidity," %")),r.a.createElement("div",{className:"forecast-item"},r.a.createElement("div",{className:u}),r.a.createElement("div",{className:"weather-icon-description"},l[0].description)),r.a.createElement("div",{className:"forecast-item"},r.a.createElement("div",{className:"forecast-item-temps"},r.a.createElement("div",{className:"temp-min"},b(o.temp_min,"C")),r.a.createElement("div",{className:"temp-max"},b(o.temp_max,"C"))),r.a.createElement("div",{className:"forecast-item-tempcurrent"},b(o.temp,"C")))))}},{key:"render",value:function(){return this.renderTemplate()}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;console.log("itemForecast",this.props);var t=this.props,a=(t.place,t.forecastData),n="day-forecast-weather ".concat(E(a.weather[0].icon));return r.a.createElement("div",{className:"forecast-nearest-day-item",onClick:function(){return e.props.updateHandler(a)}},r.a.createElement("h3",{className:"day-title"},function(e){if(e){var t=e.split(" ")[0].split("-");return"".concat(t[2],"/").concat(t[1])}}(a.dt_txt)),r.a.createElement("div",{className:"day-forecast-dayname"},y(a.dt,"short")),r.a.createElement("div",{className:"day-forecast-temp"},b(a.main.temp,"C")),r.a.createElement("div",{className:n}))}}]),t}(n.Component),N=a(12),C=a.n(N),g=function(e){return{type:"CURRENT_FORECAST",payload:e}},w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderTemplate",value:function(){var e=this.props,t=e.data,a=e.isFetching,n=e.place,c=e.currentForecast,i=e.setCurrentForecast,o=c.currentForecastData,s=t?t[0].cod:null,l=t&&200===s?function(e){var t=[];return[3,11,19,27,35].forEach(function(a){t.push(e[a])}),t}(t[1].list):null,u=l?l.map(function(e){return r.a.createElement(j,{forecastData:e,place:n,key:C.a.v4(),updateHandler:i})}):"";return a?r.a.createElement("p",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"search-results-container"},o?function(){var e={name:n},t=Object.assign(o,e);return t?r.a.createElement(O,{forecastData:t||null}):""}():t?"404"!==s?r.a.createElement(O,{forecastData:t?t[0]:null}):r.a.createElement("p",null,"City not found!"):"",t&&"404"!==s?r.a.createElement("div",{className:"forecast-nearest-days"},u):"")}},{key:"render",value:function(){return this.renderTemplate()}}]),t}(n.Component),F=Object(d.b)(function(e){return{currentForecast:e.currentForecastData}},function(e){return{setCurrentForecast:function(t){return e(g(t))}}})(w),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"user-activity-list-item"},"Dresden, DE")}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-activity-item"},r.a.createElement("div",{className:"user-activity-header"},r.a.createElement("h3",{className:"user-activity-title user-activity-title-history"},"recently viewed"),r.a.createElement("button",{className:"remove-button"})),r.a.createElement("div",{className:"user-activity-content"},r.a.createElement("ul",{className:"user-activity-list"},r.a.createElement(k,null))))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"user-activity-list-item"},"Braga, PT")}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-activity-item"},r.a.createElement("div",{className:"user-activity-header"},r.a.createElement("h3",{className:"user-activity-title user-activity-title-fav"},"favourite"),r.a.createElement("button",{className:"remove-button"})),r.a.createElement("div",{className:"user-activity-content"},r.a.createElement("ul",{className:"user-activity-list"},r.a.createElement(D,null))))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-activity-wrap"},r.a.createElement(S,null),r.a.createElement(T,null))}}]),t}(n.Component),R=(a(36),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"changeColorThemeHandler",value:function(e){var t=e.target.value;this.props.handleThemeColorChange(t)}},{key:"renderTemplate",value:function(){var e=this;return["dark","blue","yellow"].map(function(t){return r.a.createElement("div",{className:"color-switcher__item",key:C.a.v4()},r.a.createElement("label",{className:"color-switcher-label"},r.a.createElement("input",{type:"radio",name:"color",value:t,className:"color-switcher-input hidden-input",onChange:e.changeColorThemeHandler.bind(e)}),r.a.createElement("span",{className:"color-switcher-name"},t)))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"color-switcher"},r.a.createElement("p",null,"Choose color theme: "),this.renderTemplate())}}]),t}(n.Component)),_=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getWeatherURLS",value:function(e,t){return"".concat(e).concat(t,"&appid=").concat(v,"&units=metric")}},{key:"getWeatherData",value:function(e){var t=[this.getWeatherURLS("https://api.openweathermap.org/data/2.5/weather?q=",e),this.getWeatherURLS("https://api.openweathermap.org/data/2.5/forecast?q=",e)];return Promise.all(t.map(function(e){return fetch(e)})).then(function(e){return Promise.all(e.map(function(e){return e.json()}))})}},{key:"getForecast",value:function(e,t){var a="".concat(e).concat(t,"&appid=").concat(v,"&units=metric");return fetch(a).then(function(e){return e.json()}).catch(function(e){return console.error(e)})}}]),e}(),A="REQUEST",U="REQUEST_SUCCESS",L="REQUEST_FAIL",W=(a(37),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.setPlaceAction,a=e.getForecastDataAction,n=e.forecastData,c=e.place,i=e.setCurrentForecast,o=e.setThemeColor,s=e.themeColor,l=this.props.themeColor;return r.a.createElement("div",{className:"App ".concat(l)},r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"app-container"},r.a.createElement("h1",{className:"main-title"},"Weather application"),r.a.createElement(R,{handleThemeColorChange:o,color:s}),r.a.createElement(f,{handleForecastData:a,handleCurrentForecastData:i,place:t}),r.a.createElement(F,{data:n.data,isFetching:n.isFetching,place:c}),r.a.createElement(x,null))))}}]),t}(n.Component)),P=Object(d.b)(function(e){return console.log(e),{themeColor:e.color.color,forecastData:e.forecastData,place:e.place.place}},function(e){return{setPlaceAction:function(t){return e(function(e){return{type:"SET_PLACE",payload:e}}(t))},getForecastDataAction:function(t){return e(function(e){return function(t){t({type:A}),(new _).getWeatherData(e).then(function(e){t({type:U,payload:e})}).catch(function(e){t({type:L,payload:e,error:!0})})}}(t))},setCurrentForecast:function(t){return e(g(t))},setThemeColor:function(t){return e(function(e){return{type:"SET_THEME_COLOR",payload:e}}(t))}}})(W),H=a(9),M={unit:"Metric"};var I=a(6),B={place:"Kyiv",isFavourite:!1};var Q={color:"dark"};var q={data:null,isFetching:!1};var J={currentForecastData:null};var G=Object(H.c)({units:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:M},place:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLACE":return Object(I.a)({},e,{place:t.payload});default:return e}},color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME_COLOR":return Object(I.a)({},e,{color:t.payload});default:return e}},forecastData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(I.a)({},e,{isFetching:!0});case U:return Object(I.a)({},e,{isFetching:!1,data:t.payload});case L:return Object(I.a)({},e,{isFetching:!1,data:null});default:return e}},currentForecastData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_FORECAST":return Object(I.a)({},e,{currentForecastData:t.payload});default:return e}}}),K=a(22),z=Object(H.d)(G,Object(H.a)(K.a));i.a.render(r.a.createElement(d.a,{store:z},r.a.createElement(P,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c05470c8.chunk.js.map