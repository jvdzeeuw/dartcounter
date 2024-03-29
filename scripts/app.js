(function() {
    "use strict";
    angular.module("app.chart.ctrls", []).controller("chartCtrl", ["$scope", function($scope) {
            return $scope.easypiechartsm1 = {percent: 63, options: {animate: {duration: 1e3, enabled: !1}, barColor: $scope.color.success, lineCap: "round", size: 120, lineWidth: 5}}, $scope.easypiechartsm2 = {percent: 35, options: {animate: {duration: 1e3, enabled: !1}, barColor: $scope.color.info, lineCap: "round", size: 120, lineWidth: 5}}, $scope.easypiechartsm3 = {percent: 75, options: {animate: {duration: 1e3, enabled: !1}, barColor: $scope.color.warning, lineCap: "round", size: 120, lineWidth: 5}}, $scope.easypiechartsm4 = {percent: 66, options: {animate: {duration: 1e3, enabled: !1}, barColor: $scope.color.danger, lineCap: "round", size: 120, lineWidth: 5}}, $scope.easypiechart = {percent: 65, options: {animate: {duration: 1e3, enabled: !0}, barColor: $scope.color.primary, lineCap: "round", size: 180, lineWidth: 5}}, $scope.easypiechart2 = {percent: 35, options: {animate: {duration: 1e3, enabled: !0}, barColor: $scope.color.success, lineCap: "round", size: 180, lineWidth: 10}}, $scope.easypiechart3 = {percent: 68, options: {animate: {duration: 1e3, enabled: !0}, barColor: $scope.color.info, lineCap: "square", size: 180, lineWidth: 20, scaleLength: 0}}
        }]).controller("flotChartCtrl", ["$scope", function($scope) {
            var areaChart, barChart, barChartH, lineChart1, sampledata1, sampledata2;
            return lineChart1 = {}, lineChart1.data1 = [[1, 15], [2, 20], [3, 14], [4, 10], [5, 10], [6, 20], [7, 28], [8, 26], [9, 22]], $scope.line1 = {}, $scope.line1.data = [{data: lineChart1.data1, label: "Trend"}], $scope.line1.options = {series: {lines: {show: !0, fill: !0, fillColor: {colors: [{opacity: 0}, {opacity: .3}]}}, points: {show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5}}, colors: [$scope.color.primary, $scope.color.infoAlt], tooltip: !0, tooltipOpts: {defaultTheme: !1}, grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"}, xaxis: {ticks: [[1, "Jan."], [2, "Feb."], [3, "Mar."], [4, "Apr."], [5, "May"], [6, "June"], [7, "July"], [8, "Aug."], [9, "Sept."], [10, "Oct."], [11, "Nov."], [12, "Dec."]]}}, areaChart = {}, areaChart.data1 = [[2007, 15], [2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]], areaChart.data2 = [[2007, 15], [2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]], $scope.area = {}, $scope.area.data = [{data: areaChart.data1, label: "Value A", lines: {fill: !0}}, {data: areaChart.data2, label: "Value B", points: {show: !0}, yaxis: 2}], $scope.area.options = {series: {lines: {show: !0, fill: !1}, points: {show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5}, shadowSize: 0}, grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"}, colors: [$scope.color.success, $scope.color.danger], tooltip: !0, tooltipOpts: {defaultTheme: !1}, xaxis: {mode: "time"}, yaxes: [{}, {position: "right"}]}, sampledata1 = [[1, 65], [2, 59], [3, 90], [4, 81], [5, 56], [6, 55], [7, 68], [8, 45], [9, 66]], sampledata2 = [[1, 28], [2, 48], [3, 30], [4, 60], [5, 100], [6, 50], [7, 10], [8, 25], [9, 50]], $scope.area1 = {}, $scope.area1.data = [{label: " A", data: sampledata1, bars: {order: 0, fillColor: {colors: [{opacity: .3}, {opacity: .3}]}, show: !0, fill: 1, barWidth: .3, align: "center", horizontal: !1}}, {data: sampledata2, curvedLines: {apply: !0}, lines: {show: !0, fill: !0, fillColor: {colors: [{opacity: .2}, {opacity: .2}]}}}, {data: sampledata2, label: "D", points: {show: !0}}], $scope.area1.options = {series: {curvedLines: {active: !0}, points: {lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 4}}, grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"}, tooltip: !0, tooltipOpts: {defaultTheme: !1}, colors: [$scope.color.gray, $scope.color.primary, $scope.color.primary]}, barChart = {}, barChart.data1 = [[2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]], barChart.data2 = [[2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]], barChart.data3 = [[2008, 12], [2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]], $scope.barChart = {}, $scope.barChart.data = [{label: "Value A", data: barChart.data1}, {label: "Value B", data: barChart.data2}, {label: "Value C", data: barChart.data3}], $scope.barChart.options = {series: {stack: !0, bars: {show: !0, fill: 1, barWidth: .3, align: "center", horizontal: !1, order: 1}}, grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"}, tooltip: !0, tooltipOpts: {defaultTheme: !1}, colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]}, $scope.barChart1 = {}, $scope.barChart1.data = [{label: "Value A", data: barChart.data1, bars: {order: 0}}, {label: "Value B", data: barChart.data2, bars: {order: 1}}, {label: "Value C", data: barChart.data3, bars: {order: 2}}], $scope.barChart1.options = {series: {stack: !0, bars: {show: !0, fill: 1, barWidth: .2, align: "center", horizontal: !1}}, grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"}, tooltip: !0, tooltipOpts: {defaultTheme: !1}, colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]}, $scope.barChart3 = {}, $scope.barChart3.data = [{label: " A", data: [[40, 1], [59, 2], [90, 3], [81, 4], [56, 5]], bars: {order: 0, fillColor: {colors: [{opacity: .3}, {opacity: .3}]}}}, {label: " B", data: [[28, 1], [48, 2], [40, 3], [19, 4], [45, 5]], bars: {order: 1, fillColor: {colors: [{opacity: .3}, {opacity: .3}]}}}], $scope.barChart3.options = {series: {stack: !0, bars: {show: !0, fill: 1, barWidth: .35, align: "center", horizontal: !0}}, grid: {show: !0, aboveData: !1, color: "#eaeaea", hoverable: !0, borderWidth: 1, borderColor: "#eaeaea"}, tooltip: !0, tooltipOpts: {defaultTheme: !1}, colors: [$scope.color.gray, $scope.color.primary, $scope.color.info, $scope.color.danger]}, barChartH = {}, barChartH.data1 = [[85, 10], [50, 20], [55, 30]], barChartH.data2 = [[77, 10], [60, 20], [70, 30]], barChartH.data3 = [[100, 10], [70, 20], [55, 30]], $scope.barChart2 = {}, $scope.barChart2.data = [{label: "Value A", data: barChartH.data1, bars: {order: 1}}, {label: "Value B", data: barChartH.data2, bars: {order: 2}}, {label: "Value C", data: barChartH.data3, bars: {order: 3}}], $scope.barChart2.options = {series: {stack: !0, bars: {show: !0, fill: 1, barWidth: 1, align: "center", horizontal: !0}}, grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"}, tooltip: !0, tooltipOpts: {defaultTheme: !1}, colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]}, $scope.pieChart = {}, $scope.pieChart.data = [{label: "Download Sales", data: 12}, {label: "In-Store Sales", data: 30}, {label: "Mail-Order Sales", data: 20}, {label: "Online Sales", data: 19}], $scope.pieChart.options = {series: {pie: {show: !0}}, legend: {show: !0}, grid: {hoverable: !0, clickable: !0}, colors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger], tooltip: !0, tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}}, $scope.donutChart = {}, $scope.donutChart.data = [{label: "Download Sales", data: 12}, {label: "In-Store Sales", data: 30}, {label: "Mail-Order Sales", data: 20}, {label: "Online Sales", data: 19}], $scope.donutChart.options = {series: {pie: {show: !0, innerRadius: .5}}, legend: {show: !0}, grid: {hoverable: !0, clickable: !0}, colors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger], tooltip: !0, tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}}, $scope.donutChart2 = {}, $scope.donutChart2.data = [{label: "Download Sales", data: 12}, {label: "In-Store Sales", data: 30}, {label: "Mail-Order Sales", data: 20}, {label: "Online Sales", data: 19}, {label: "Direct Sales", data: 15}], $scope.donutChart2.options = {series: {pie: {show: !0, innerRadius: .45}}, legend: {show: !1}, grid: {hoverable: !0, clickable: !0}, colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"], tooltip: !0, tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}}
        }]).controller("sparklineCtrl", ["$scope", function($scope) {
            return $scope.demoData1 = {data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7], options: {type: "line", lineColor: "#fff", highlightLineColor: "#fff", fillColor: $scope.color.success, spotColor: !1, minSpotColor: !1, maxSpotColor: !1, width: "100%", height: "150px"}}, $scope.simpleChart1 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "line", lineColor: $scope.color.primary, fillColor: "#fafafa", spotColor: !1, minSpotColor: !1, maxSpotColor: !1}}, $scope.simpleChart2 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "bar", barColor: $scope.color.primary}}, $scope.simpleChart3 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "pie", sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger]}}, $scope.tristateChart1 = {data: [1, 2, -3, -5, 3, 1, -4, 2], options: {type: "tristate", posBarColor: $scope.color.success, negBarColor: $scope.color.danger}}, $scope.largeChart1 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "line", lineColor: $scope.color.info, highlightLineColor: "#fff", fillColor: $scope.color.info, spotColor: !1, minSpotColor: !1, maxSpotColor: !1, width: "100%", height: "150px"}}, $scope.largeChart2 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "bar", barColor: $scope.color.success, barWidth: 10, width: "100%", height: "150px"}}, $scope.largeChart3 = {data: [3, 1, 2, 3, 5], options: {type: "pie", sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger], width: "150px", height: "150px"}}
        }])
}).call(this), function() {
    "use strict";
    angular.module("app.chart.directives", []).directive("flotChart", [function() {
            return{restrict: "A", scope: {data: "=", options: "="}, link: function(scope, ele) {
                    var data, options, plot;
                    return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options)
                }}
        }]).directive("flotChartRealtime", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    var data, getRandomData, plot, totalPoints, update, updateInterval;
                    return data = [], totalPoints = 300, getRandomData = function() {
                        var i, prev, res, y;
                        for (data.length > 0 && (data = data.slice(1)); data.length < totalPoints; )
                            prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + 10 * Math.random() - 5, 0 > y ? y = 0 : y > 100 && (y = 100), data.push(y);
                        for (res = [], i = 0; i < data.length; )
                            res.push([i, data[i]]), ++i;
                        return res
                    }, update = function() {
                        plot.setData([getRandomData()]), plot.draw(), setTimeout(update, updateInterval)
                    }, data = [], totalPoints = 300, updateInterval = 200, plot = $.plot(ele[0], [getRandomData()], {series: {lines: {show: !0, fill: !0}, shadowSize: 0}, yaxis: {min: 0, max: 100}, xaxis: {show: !1}, grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"}, colors: ["#5B90BF"]}), update()
                }}
        }]).directive("sparkline", [function() {
            return{restrict: "A", scope: {data: "=", options: "="}, link: function(scope, ele) {
                    var data, options, sparkResize, sparklineDraw;
                    return data = scope.data, options = scope.options, sparkResize = void 0, sparklineDraw = function() {
                        return ele.sparkline(data, options)
                    }, $(window).resize(function() {
                        return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200)
                    }), sparklineDraw()
                }}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.ui.form.ctrls", []).controller("TagsDemoCtrl", ["$scope", function($scope) {
            return $scope.tags = ["foo", "bar"]
        }]).controller("DatepickerDemoCtrl", ["$scope", function($scope) {
            return $scope.today = function() {
                return $scope.dt = new Date
            }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function() {
                return $scope.showWeeks = !$scope.showWeeks
            }, $scope.clear = function() {
                return $scope.dt = null
            }, $scope.disabled = function(date, mode) {
                return"day" === mode && (0 === date.getDay() || 6 === date.getDay())
            }, $scope.toggleMin = function() {
                var _ref;
                return $scope.minDate = null != (_ref = $scope.minDate) ? _ref : {"null": new Date}
            }, $scope.toggleMin(), $scope.open = function($event) {
                return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0
            }, $scope.dateOptions = {"year-format": "'yy'", "starting-day": 1}, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0]
        }]).controller("TimepickerDemoCtrl", ["$scope", function($scope) {
            return $scope.mytime = new Date, $scope.hstep = 1, $scope.mstep = 15, $scope.options = {hstep: [1, 2, 3], mstep: [1, 5, 10, 15, 25, 30]}, $scope.ismeridian = !0, $scope.toggleMode = function() {
                return $scope.ismeridian = !$scope.ismeridian
            }, $scope.update = function() {
                var d;
                return d = new Date, d.setHours(14), d.setMinutes(0), $scope.mytime = d
            }, $scope.changed = function() {
                return void 0
            }, $scope.clear = function() {
                return $scope.mytime = null
            }
        }]).controller("TypeaheadCtrl", ["$scope", function($scope) {
            return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        }]).controller("RatingDemoCtrl", ["$scope", function($scope) {
            return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function(value) {
                return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max)
            }, $scope.ratingStates = [{stateOn: "glyphicon-ok-sign", stateOff: "glyphicon-ok-circle"}, {stateOn: "glyphicon-star", stateOff: "glyphicon-star-empty"}, {stateOn: "glyphicon-heart", stateOff: "glyphicon-ban-circle"}, {stateOn: "glyphicon-heart"}, {stateOff: "glyphicon-off"}]
        }])
}.call(this), function() {
    angular.module("app.ui.form.directives", []).directive("uiRangeSlider", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    return ele.slider()
                }}
        }]).directive("uiFileUpload", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    return ele.bootstrapFileInput()
                }}
        }]).directive("uiSpinner", [function() {
            return{restrict: "A", compile: function(ele) {
                    return ele.addClass("ui-spinner"), {post: function() {
                            return ele.spinner()
                        }}
                }}
        }]).directive("uiWizardForm", [function() {
            return{link: function(scope, ele) {
                    return ele.steps()
                }}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope", function($scope) {
            return $scope.wizard = {firstName: "some name", lastName: "", email: "", password: "", age: "", address: ""}, $scope.isValidateStep1 = function() {
                return void 0
            }, $scope.finishedWizard = function() {
                return void 0
            }
        }]).controller("formConstraintsCtrl", ["$scope", function($scope) {
            var original;
            return $scope.form = {required: "", minlength: "", maxlength: "", length_rage: "", type_something: "", confirm_type: "", foo: "", email: "", url: "", num: "", minVal: "", maxVal: "", valRange: "", pattern: ""}, original = angular.copy($scope.form), $scope.revert = function() {
                return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine()
            }, $scope.canRevert = function() {
                return!angular.equals($scope.form, original) || !$scope.form_constraints.$pristine
            }, $scope.canSubmit = function() {
                return $scope.form_constraints.$valid && !angular.equals($scope.form, original)
            }
        }]).controller("signinCtrl", ["$scope", function($scope) {
            var original;
            return $scope.user = {email: "", password: ""}, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() {
                return $scope.user = angular.copy(original), $scope.form_signin.$setPristine()
            }, $scope.canRevert = function() {
                return!angular.equals($scope.user, original) || !$scope.form_signin.$pristine
            }, $scope.canSubmit = function() {
                return $scope.form_signin.$valid && !angular.equals($scope.user, original)
            }, $scope.submitForm = function() {
                return $scope.showInfoOnSubmit = !0, $scope.revert()
            }
        }]).controller("signupCtrl", ["$scope", function($scope) {
            var original;
            return $scope.user = {name: "", email: "", password: "", confirmPassword: "", age: ""}, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() {
                return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine()
            }, $scope.canRevert = function() {
                return!angular.equals($scope.user, original) || !$scope.form_signup.$pristine
            }, $scope.canSubmit = function() {
                return $scope.form_signup.$valid && !angular.equals($scope.user, original)
            }, $scope.submitForm = function() {
                return $scope.showInfoOnSubmit = !0, $scope.revert()
            }
        }]).directive("validateEquals", [function() {
            return{require: "ngModel", link: function(scope, ele, attrs, ngModelCtrl) {
                    var validateEqual;
                    return validateEqual = function(value) {
                        var valid;
                        return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({value: void 0}) : void 0
                    }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
                        return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0
                    })
                }}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.page.ctrls", []).controller("invoiceCtrl", ["$scope", "$window", function($scope) {
            return $scope.printInvoice = function() {
                var originalContents, popupWin, printContents;
                return printContents = document.getElementById("invoice").innerHTML, originalContents = document.body.innerHTML, popupWin = window.open(), popupWin.document.open(), popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + "</html>"), popupWin.document.close()
            }
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter", function($scope, $filter) {
            var init;
            return $scope.stores = [{name: "Nijiya Market", price: "$$", sales: 292, rating: 4}, {name: "Eat On Monday Truck", price: "$", sales: 119, rating: 4.3}, {name: "Tea Era", price: "$", sales: 874, rating: 4}, {name: "Rogers Deli", price: "$", sales: 347, rating: 4.2}, {name: "MoBowl", price: "$$$", sales: 24, rating: 4.6}, {name: "The Milk Pail Market", price: "$", sales: 543, rating: 4.5}, {name: "Nob Hill Foods", price: "$$", sales: 874, rating: 4}, {name: "Scratch", price: "$$$", sales: 643, rating: 3.6}, {name: "Gochi Japanese Fusion Tapas", price: "$$$", sales: 56, rating: 4.1}, {name: "Cost Plus World Market", price: "$$", sales: 79, rating: 4}, {name: "Bumble Bee Health Foods", price: "$$", sales: 43, rating: 4.3}, {name: "Costco", price: "$$", sales: 219, rating: 3.6}, {name: "Red Rock Coffee Co", price: "$", sales: 765, rating: 4.1}, {name: "99 Ranch Market", price: "$", sales: 181, rating: 3.4}, {name: "Mi Pueblo Food Center", price: "$", sales: 78, rating: 4}, {name: "Cucina Venti", price: "$$", sales: 163, rating: 3.3}, {name: "Sufi Coffee Shop", price: "$", sales: 113, rating: 3.3}, {name: "Dana Street Roasting", price: "$", sales: 316, rating: 4.1}, {name: "Pearl Cafe", price: "$", sales: 173, rating: 3.4}, {name: "Posh Bagel", price: "$", sales: 140, rating: 4}, {name: "Artisan Wine Depot", price: "$$", sales: 26, rating: 4.1}, {name: "Hong Kong Chinese Bakery", price: "$", sales: 182, rating: 3.4}, {name: "Starbucks", price: "$$", sales: 97, rating: 3.7}, {name: "Tapioca Express", price: "$", sales: 301, rating: 3}, {name: "House of Bagels", price: "$", sales: 82, rating: 4.4}], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.onFilterChange = function() {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function() {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function() {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function() {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function(rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.task", []).factory("taskStorage", function() {
        var DEMO_TASKS, STORAGE_ID;
        return STORAGE_ID = "tasks", DEMO_TASKS = '[ {"title": "Upgrade to Yosemite", "completed": false}, {"title": "Finish homework", "completed": true}, {"title": "Try Google glass", "completed": false}, {"title": "Build a snowman :)", "completed": false}, {"title": "Play games with friends", "completed": true}, {"title": "Learn Swift", "completed": false}, {"title": "Shopping", "completed": true} ]', {get: function() {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS)
            }, put: function(tasks) {
                return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks))
            }}
    }).directive("taskFocus", ["$timeout", function($timeout) {
            return{link: function(scope, ele, attrs) {
                    return scope.$watch(attrs.taskFocus, function(newVal) {
                        return newVal ? $timeout(function() {
                            return ele[0].focus()
                        }, 0, !1) : void 0
                    })
                }}
        }]).controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "logger", function($scope, taskStorage, filterFilter, $rootScope, logger) {
            var tasks;
            return tasks = $scope.tasks = taskStorage.get(), $scope.newTask = "", $scope.remainingCount = filterFilter(tasks, {completed: !1}).length, $scope.editedTask = null, $scope.statusFilter = {completed: !1}, $scope.filter = function(filter) {
                switch (filter) {
                    case"all":
                        return $scope.statusFilter = "";
                    case"active":
                        return $scope.statusFilter = {completed: !1};
                    case"completed":
                        return $scope.statusFilter = {completed: !0}
                    }
            }, $scope.add = function() {
                var newTask;
                return newTask = $scope.newTask.trim(), 0 !== newTask.length ? (tasks.push({title: newTask, completed: !1}), logger.logSuccess('New task: "' + newTask + '" added'), taskStorage.put(tasks), $scope.newTask = "", $scope.remainingCount++) : void 0
            }, $scope.edit = function(task) {
                return $scope.editedTask = task
            }, $scope.doneEditing = function(task) {
                return $scope.editedTask = null, task.title = task.title.trim(), task.title ? logger.log("Task updated") : $scope.remove(task), taskStorage.put(tasks)
            }, $scope.remove = function(task) {
                var index;
                return $scope.remainingCount -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), $scope.tasks.splice(index, 1), taskStorage.put(tasks), logger.logError("Task removed")
            }, $scope.completed = function(task) {
                return $scope.remainingCount += task.completed ? -1 : 1, taskStorage.put(tasks), task.completed ? $scope.remainingCount > 0 ? logger.log(1 === $scope.remainingCount ? "Almost there! Only " + $scope.remainingCount + " task left" : "Good job! Only " + $scope.remainingCount + " tasks left") : logger.logSuccess("Congrats! All done :)") : void 0
            }, $scope.clearCompleted = function() {
                return $scope.tasks = tasks = tasks.filter(function(val) {
                    return!val.completed
                }), taskStorage.put(tasks)
            }, $scope.markAll = function(completed) {
                return tasks.forEach(function(task) {
                    return task.completed = completed
                }), $scope.remainingCount = completed ? 0 : tasks.length, taskStorage.put(tasks), completed ? logger.logSuccess("Congrats! All done :)") : void 0
            }, $scope.$watch("remainingCount == 0", function(val) {
                return $scope.allChecked = val
            }), $scope.$watch("remainingCount", function(newVal) {
                return $rootScope.$broadcast("taskRemaining:changed", newVal)
            })
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.ui.map", []).directive("uiJvectormap", [function() {
            return{restrict: "A", scope: {options: "="}, link: function(scope, ele) {
                    var options;
                    return options = scope.options, ele.vectorMap(options)
                }}
        }]).controller("jvectormapCtrl", ["$scope", function($scope) {
            var marker_data;
            return marker_data = [{latLng: [40.71, -74], name: "New York"}, {latLng: [39.9, 116.4], name: "Beijing"}, {latLng: [31.23, 121.47], name: "Shanghai"}, {latLng: [-33.86, 151.2], name: "Sydney"}, {latLng: [-37.81, 144.96], name: "Melboune"}, {latLng: [37.33, -121.89], name: "San Jose"}, {latLng: [1.3, 103.8], name: "Singapore"}, {latLng: [47.6, -122.33], name: "Seattle"}, {latLng: [41.87, -87.62], name: "Chicago"}, {latLng: [37.77, -122.41], name: "San Francisco"}, {latLng: [32.71, -117.16], name: "San Diego"}, {latLng: [51.5, -.12], name: "London"}, {latLng: [48.85, 2.35], name: "Paris"}, {latLng: [52.52, 13.4], name: "Berlin"}, {latLng: [-26.2, 28.04], name: "Johannesburg"}, {latLng: [35.68, 139.69], name: "Tokyo"}, {latLng: [13.72, 100.52], name: "Bangkok"}, {latLng: [37.56, 126.97], name: "Seoul"}, {latLng: [41.87, 12.48], name: "Roma"}, {latLng: [45.42, -75.69], name: "Ottawa"}, {latLng: [55.75, 37.61], name: "Moscow"}, {latLng: [-22.9, -43.19], name: "Rio de Janeiro"}], $scope.worldMap = {map: "world_mill_en", markers: marker_data, normalizeFunction: "polynomial", backgroundColor: null, zoomOnScroll: !1, regionStyle: {initial: {fill: "#EEEFF3"}, hover: {fill: $scope.color.primary}}, markerStyle: {initial: {fill: "#BF616A", stroke: "rgba(191,97,106,.8)", "fill-opacity": 1, "stroke-width": 9, "stroke-opacity": .5}, hover: {stroke: "black", "stroke-width": 2}}}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.ui.ctrls", []).controller("NotifyCtrl", ["$scope", "logger", function($scope, logger) {
            return $scope.notify = function(type) {
                switch (type) {
                    case"info":
                        return logger.log("Heads up! This alert needs your attention, but it's not super important.");
                    case"success":
                        return logger.logSuccess("Well done! You successfully read this important alert message.");
                    case"warning":
                        return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
                    case"error":
                        return logger.logError("Oh snap! Change a few things up and try submitting again.")
                    }
            }
        }]).controller("AlertDemoCtrl", ["$scope", function($scope) {
            return $scope.alerts = [{type: "success", msg: "Well done! You successfully read this important alert message."}, {type: "info", msg: "Heads up! This alert needs your attention, but it is not super important."}, {type: "warning", msg: "Warning! Best check yo self, you're not looking too good."}, {type: "danger", msg: "Oh snap! Change a few things up and try submitting again."}], $scope.addAlert = function() {
                var num, type;
                switch (num = Math.ceil(4 * Math.random()), type = void 0, num) {
                    case 0:
                        type = "info";
                        break;
                    case 1:
                        type = "success";
                        break;
                    case 2:
                        type = "info";
                        break;
                    case 3:
                        type = "warning";
                        break;
                    case 4:
                        type = "danger"
                }
                return $scope.alerts.push({type: type, msg: "Another alert!"})
            }, $scope.closeAlert = function(index) {
                return $scope.alerts.splice(index, 1)
            }
        }]).controller("ProgressDemoCtrl", ["$scope", function($scope) {
            return $scope.max = 200, $scope.random = function() {
                var type, value;
                value = Math.floor(100 * Math.random() + 10), type = void 0, type = 25 > value ? "success" : 50 > value ? "info" : 75 > value ? "warning" : "danger", $scope.showWarning = "danger" === type || "warning" === type, $scope.dynamic = value, $scope.type = type
            }, $scope.random()
        }]).controller("AccordionDemoCtrl", ["$scope", function($scope) {
            $scope.oneAtATime = !0, $scope.groups = [{title: "Dynamic Group Header - 1", content: "Dynamic Group Body - 1"}, {title: "Dynamic Group Header - 2", content: "Dynamic Group Body - 2"}, {title: "Dynamic Group Header - 3", content: "Dynamic Group Body - 3"}], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {isFirstOpen: !0, isFirstOpen1: !0}, $scope.addItem = function() {
                var newItemNo;
                newItemNo = $scope.items.length + 1, $scope.items.push("Item " + newItemNo)
            }
        }]).controller("CollapseDemoCtrl", ["$scope", function($scope) {
            return $scope.isCollapsed = !1
        }]).controller("ModalDemoCtrl", ["$scope", "$modal", "$log", function($scope, $modal, $log) {
            $scope.items = ["item1", "item2", "item3"], $scope.open = function() {
                var modalInstance;
                modalInstance = $modal.open({templateUrl: "myModalContent.html", controller: "ModalInstanceCtrl", resolve: {items: function() {
                            return $scope.items
                        }}}), modalInstance.result.then(function(selectedItem) {
                    $scope.selected = selectedItem
                }, function() {
                    $log.info("Modal dismissed at: " + new Date)
                })
            }
        }]).controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "content", function($scope, $modalInstance, content) {
			$scope.items = content.items;
			$scope.gameScope = content.scope;
			if($scope.items != undefined){
				$scope.selected = {item: $scope.items[0]}
			}
			$scope.ok = function() {
                $modalInstance.close($scope.selected.item)
            },
			$scope.dismiss = function (data) {
				$modalInstance.dismiss(data);
			},
			$scope.callback = function(text) {
                $modalInstance.close(text)
            },			$scope.cancel = function() {
                $modalInstance.dismiss("cancel")
            }
        }]).controller("PaginationDemoCtrl", ["$scope", function($scope) {
            return $scope.totalItems = 64, $scope.currentPage = 4, $scope.setPage = function(pageNo) {
                return $scope.currentPage = pageNo
            }, $scope.maxSize = 5, $scope.bigTotalItems = 175, $scope.bigCurrentPage = 1
        }]).controller("TabsDemoCtrl", ["$scope", function($scope) {
            return $scope.tabs = [{title: "Dynamic Title 1", content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."}, {title: "Disabled", content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.", disabled: !0}], $scope.navType = "pills"
        }]).controller("TreeDemoCtrl", ["$scope", function($scope) {
            return $scope.list = [{id: 1, title: "Item 1", items: []}, {id: 2, title: "Item 2", items: [{id: 21, title: "Item 2.1", items: [{id: 211, title: "Item 2.1.1", items: []}, {id: 212, title: "Item 2.1.2", items: []}]}, {id: 22, title: "Item 2.2", items: [{id: 221, title: "Item 2.2.1", items: []}, {id: 222, title: "Item 2.2.2", items: []}]}]}, {id: 3, title: "Item 3", items: []}, {id: 4, title: "Item 4", items: [{id: 41, title: "Item 4.1", items: []}]}, {id: 5, title: "Item 5", items: []}, {id: 6, title: "Item 6", items: []}, {id: 7, title: "Item 7", items: []}], $scope.selectedItem = {}, $scope.options = {}, $scope.remove = function(scope) {
                scope.remove()
            }, $scope.toggle = function(scope) {
                scope.toggle()
            }, $scope.newSubItem = function(scope) {
                var nodeData;
                nodeData = scope.$modelValue, nodeData.items.push({id: 10 * nodeData.id + nodeData.items.length, title: nodeData.title + "." + (nodeData.items.length + 1), items: []})
            }
        }]).controller("MapDemoCtrl", ["$scope", "$http", "$interval", function($scope, $http, $interval) {
            var i, markers;
            for (markers = [], i = 0; 8 > i; )
                markers[i] = new google.maps.Marker({title: "Marker: " + i}), i++;
            $scope.GenerateMapMarkers = function() {
                var d, lat, lng, loc, numMarkers;
                for (d = new Date, $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i; )
                    lat = 43.66 + Math.random() / 100, lng = -79.4103 + Math.random() / 100, loc = new google.maps.LatLng(lat, lng), markers[i].setPosition(loc), markers[i].setMap($scope.map), i++
            }, $interval($scope.GenerateMapMarkers, 2e3)
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.ui.directives", []).directive("uiTime", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    var checkTime, startTime;
                    return startTime = function() {
                        var h, m, s, t, time, today;
                        return today = new Date, h = today.getHours(), m = today.getMinutes(), s = today.getSeconds(), m = checkTime(m), s = checkTime(s), time = h + ":" + m + ":" + s, ele.html(time), t = setTimeout(startTime, 500)
                    }, checkTime = function(i) {
                        return 10 > i && (i = "0" + i), i
                    }, startTime()
                }}
        }]).directive("uiNotCloseOnClick", [function() {
            return{restrict: "A", compile: function(ele) {
                    return ele.on("click", function(event) {
                        return event.stopPropagation()
                    })
                }}
        }]).directive("slimScroll", [function() {
            return{restrict: "A", link: function(scope, ele, attrs) {
                    return ele.slimScroll({height: attrs.scrollHeight || "100%"})
                }}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.ui.services", []).factory("logger", [function() {
            var logIt;
            return toastr.options = {closeButton: !0, positionClass: "toast-bottom-right", timeOut: "3000"}, logIt = function(message, type) {
                return toastr[type](message)
            }, {log: function(message) {
                    logIt(message, "info")
                }, logWarning: function(message) {
                    logIt(message, "warning")
                }, logSuccess: function(message) {
                    logIt(message, "success")
                }, logError: function(message) {
                    logIt(message, "error")
                }}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app", ["ngCookies","ngRoute", "ngAnimate", "ui.bootstrap", "easypiechart", "ui.tree", "ngMap", "ngTagsInput", "app.controllers", "app.directives", "app.localization", "app.nav", "app.ui.ctrls", "app.ui.directives", "app.ui.services", "app.ui.map", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.task", "app.chart.ctrls", "app.chart.directives", "app.page.ctrls"]).config(["$routeProvider", function($routeProvider) {
            var routes, setRoutes;
            var domain = 'http://dartcounter.nl/';
            return routes = ["dashboard", "ui/typography", "ui/buttons", "ui/icons", "ui/grids", "ui/widgets", "ui/components", "ui/boxes", "ui/timeline", "ui/nested-lists", "ui/pricing-tables", "ui/maps", "tables/static", "tables/dynamic", "tables/responsive", "forms/elements", "forms/layouts", "forms/validation", "forms/wizard", "charts/charts", "charts/flot", "pages/404", "pages/500", "pages/blank", "pages/forgot-password", "pages/invoice", "pages/lock-screen", "pages/profile", "pages/invoice", "pages/signin", "pages/signup", "mail/compose", "mail/inbox", "mail/single", "tasks/tasks"], setRoutes = function(route) {
                var config, url;
                return url = "/" + route, config = {templateUrl: domain+"views/" + route + ".html"}, $routeProvider.when(url, config), $routeProvider
            }, routes.forEach(function(route) {
                return setRoutes(route)
            }), $routeProvider.when("/", {redirectTo: "/dashboard"}).when("/404", {templateUrl: domain+"views/pages/404.html"}).otherwise({redirectTo: "/404"})
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.nav", []).directive("toggleNavCollapsedMin", ["$rootScope", function($rootScope) {
            return{restrict: "A", link: function(scope, ele) {
                    var app;
                    return app = $("#app"), ele.on("click", function(e) {
                        return app.hasClass("nav-collapsed-min") ? app.removeClass("nav-collapsed-min") : (app.addClass("nav-collapsed-min"), $rootScope.$broadcast("nav:reset")), e.preventDefault()
                    })
                }}
        }]).directive("collapseNav", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
                    return $window = $(window), $lists = ele.find("ul").parent("li"), $lists.append('<i class="ti-angle-down icon-has-ul-h"></i><i class="ti-angle-double-right icon-has-ul"></i>'), $a = $lists.children("a"), $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a"), $app = $("#app"), $nav = $("#nav-container"), $a.on("click", function(event) {
                        var $parent, $this;
                        return $app.hasClass("nav-collapsed-min") || $nav.hasClass("nav-horizontal") && $window.width() >= 768 ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").stop().slideToggle(), event.preventDefault())
                    }), $aRest.on("click", function() {
                        return $lists.removeClass("open").find("ul").slideUp()
                    }), scope.$on("nav:reset", function() {
                        return $lists.removeClass("open").find("ul").slideUp()
                    }), Timer = void 0, prevWidth = $window.width(), updateClass = function() {
                        var currentWidth;
                        return currentWidth = $window.width(), 768 > currentWidth && $app.removeClass("nav-collapsed-min"), 768 > prevWidth && currentWidth >= 768 && $nav.hasClass("nav-horizontal") && $lists.removeClass("open").find("ul").slideUp(), prevWidth = currentWidth
                    }, $window.resize(function() {
                        var t;
                        return clearTimeout(t), t = setTimeout(updateClass, 300)
                    })
                }}
        }]).directive("highlightActive", [function() {
            return{restrict: "A", controller: ["$scope", "$element", "$attrs", "$location", function($scope, $element, $attrs, $location) {
                        var highlightActive, links, path;
                        return links = $element.find("a"), path = function() {
                            return $location.path()
                        }, highlightActive = function(links, path) {
                            return path = "#" + path, angular.forEach(links, function(link) {
                                var $li, $link, href;
                                return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0
                            })
                        }, highlightActive(links, $location.path()), $scope.$watch(path, function(newVal, oldVal) {
                            return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0
                        })
                    }]}
        }]).directive("toggleOffCanvas", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    return ele.on("click", function() {
                        return $("#app").toggleClass("on-canvas")
                    })
                }}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.directives", []).directive("imgHolder", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    return Holder.run({images: ele[0]})
                }}
        }]).directive("customPage", function() {
        return{restrict: "A", controller: ["$scope", "$element", "$location", function($scope, $element, $location) {
                    var addBg, path;
                    return path = function() {
                        return $location.path()
                    }, addBg = function(path) {
                        switch ($element.removeClass("body-wide body-err body-lock body-auth"), path) {
                            case"/404":
                            case"/pages/404":
                            case"/pages/500":
                                return $element.addClass("body-wide body-err");
                            case"/pages/signin":
                            case"/pages/signup":
                            case"/pages/forgot-password":
                                return $element.addClass("body-wide body-auth");
                            case"/pages/lock-screen":
                                return $element.addClass("body-wide body-lock")
                            }
                    }, addBg($location.path()), $scope.$watch(path, function(newVal, oldVal) {
                        return newVal !== oldVal ? addBg($location.path()) : void 0
                    })
                }]}
    }).directive("uiColorSwitch", [function() {
            return{restrict: "A", link: function(scope, ele) {
                    return ele.find(".color-option").on("click", function(event) {
                        var $this, hrefUrl, style;
                        if ($this = $(this), hrefUrl = void 0, style = $this.data("style"), "loulou" === style)
                            hrefUrl = "styles/main.css", $('link[href^="styles/main"]').attr("href", hrefUrl);
                        else {
                            if (!style)
                                return!1;
                            style = "-" + style, hrefUrl = "styles/main" + style + ".css", $('link[href^="styles/main"]').attr("href", hrefUrl)
                        }
                        return event.preventDefault()
                    })
                }}
        }]).directive("goBack", [function() {
            return{restrict: "A", controller: ["$scope", "$element", "$window", function($scope, $element, $window) {
                        return $element.on("click", function() {
                            return $window.history.back()
                        })
                    }]}
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.localization", []).factory("localize", ["$http", "$rootScope", "$window", function($http, $rootScope, $window) {
            var localize;
            var domain = 'http://lpd.notepaper.nl/';
            return localize = {language: "", url: void 0, resourceFileLoaded: !1, successCallback: function(data) {
                    return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated")
                }, setLanguage: function(value) {
                    return localize.language = value.toLowerCase().split("-")[0], localize.initLocalizedResources()
                }, setUrl: function(value) {
                    return localize.url = value, localize.initLocalizedResources()
                }, buildUrl: function() {
                    return localize.language || (localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase(), localize.language = localize.language.split("-")[0]), domain+"i18n/resources-locale_" + localize.language + ".js"
                }, initLocalizedResources: function() {
                    var url;
                    return url = localize.url || localize.buildUrl(), $http({method: "GET", url: url, cache: !1}).success(localize.successCallback).error(function() {
                        return $rootScope.$broadcast("localizeResourcesUpdated")
                    })
                }, getLocalizedString: function(value) {
                    var result, valueLowerCase;
                    return result = void 0, localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, result
                }}
        }]).directive("i18n", ["localize", function(localize) {
            var i18nDirective;
            return i18nDirective = {restrict: "EA", updateText: function(ele, input, placeholder) {
                    var result;
                    return result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), ele.text(result)) : void 0
                }, link: function(scope, ele, attrs) {
                    return scope.$on("localizeResourcesUpdated", function() {
                        return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder)
                    }), attrs.$observe("i18n", function(value) {
                        return i18nDirective.updateText(ele, value, attrs.placeholder)
                    })
                }}
        }]).controller("LangCtrl", ["$scope", "localize", function($scope, localize) {
            return $scope.lang = "English", $scope.setLang = function(lang) {
                switch (lang) {
                    case"English":
                        localize.setLanguage("EN-US");
                        break;
                    case"Español":
                        localize.setLanguage("ES-ES");
                        break;
                    case"日本語":
                        localize.setLanguage("JA-JP");
                        break;
                    case"中文":
                        localize.setLanguage("ZH-TW");
                        break;
                    case"Deutsch":
                        localize.setLanguage("DE-DE");
                        break;
                    case"français":
                        localize.setLanguage("FR-FR");
                        break;
                    case"Italiano":
                        localize.setLanguage("IT-IT");
                        break;
                    case"Portugal":
                        localize.setLanguage("PT-BR");
                        break;
                    case"Русский язык":
                        localize.setLanguage("RU-RU");
                        break;
                    case"한국어":
                        localize.setLanguage("KO-KR")
                }
                return $scope.lang = lang
            }, $scope.getFlag = function() {
                var lang;
                switch (lang = $scope.lang) {
                    case"English":
                        return"flags-american";
                    case"Español":
                        return"flags-spain";
                    case"日本語":
                        return"flags-japan";
                    case"中文":
                        return"flags-china";
                    case"Deutsch":
                        return"flags-germany";
                    case"français":
                        return"flags-france";
                    case"Italiano":
                        return"flags-italy";
                    case"Portugal":
                        return"flags-portugal";
                    case"Русский язык":
                        return"flags-russia";
                    case"한국어":
                        return"flags-korea"
                    }
            }
        }])
}.call(this), function() {
    "use strict";
    angular.module("app.controllers", []).controller("AppCtrl", ["$scope", "$rootScope", "$cookieStore", "$modal", function($scope, $rootScope, $cookieStore, $modal) {
            var $window;
            
            $cookieStore.put('skin','21');
            
			$scope.modalInstance = null;
	
			$scope.ToggleLegend = function(){
				console.log($scope.modalInstance);
				if ($scope.modalInstance != null) {
					console.log($scope.modalInstance);
					$scope.modalInstance.opened.then(function () {
						$scope.modalInstance.close();
						$scope.modalInstance = null;
					});
				} else {
					console.log($scope.modalInstance);
					$scope.modalInstance = $modal.open({
						templateUrl: "http://dartcounter.nl/views/dialogs/HelpDialog.html",
						controller: "ModalInstanceCtrl",
						size: 'lg',
						resolve: {
							content: function () {
								return {
									type: 'info',
									title: 'Help en ondersteuning'
								};
							}
						}
					});

					$scope.modalInstance.result.finally(function () {
						$scope.modalInstance = null;
					});
				}
			}
			
            return $window = $(window), 
            $scope.main = {brand: "Dart Counter", name: "Your Name"},
            $scope.pageTransitionOpts = [
                {name: "Fade up", "class": "animate-fade-up"}, 
                {name: "Scale up", "class": "ainmate-scale-up"}, 
                {name: "Slide in from right", "class": "ainmate-slide-in-right"},
                {name: "Flip Y", "class": "animate-flip-y"}
            ],
			
            $scope.admin = {
                layout: "boxed", 
                menu: "horizontal", 
                fixedHeader: true, 
                fixedSidebar: true, 
                pageTransition: $scope.pageTransitionOpts[0], 
                skin: $cookieStore.get('skin')
            }, 
            $scope.$watch("admin.skin", function(newVal, oldVal) {
                if(newVal != undefined){
                    $cookieStore.put('skin',newVal);
                }
            }),
            $scope.$watch("admin", function(newVal, oldVal) {
                return"horizontal" === newVal.menu && "vertical" === oldVal.menu ? void $rootScope.$broadcast("nav:reset") : newVal.fixedHeader === !1 && newVal.fixedSidebar === !0 ? (oldVal.fixedHeader === !1 && oldVal.fixedSidebar === !1 && ($scope.admin.fixedHeader = !0, $scope.admin.fixedSidebar = !0), void(oldVal.fixedHeader === !0 && oldVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !1, $scope.admin.fixedSidebar = !1))) : (newVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !0), void(newVal.fixedHeader === !1 && ($scope.admin.fixedSidebar = !1)))
            }, !0), $scope.color = {primary: "#5B90BF", success: "#A3BE8C", info: "#7FABD2", infoAlt: "#B48EAD", warning: "#EBCB8B", danger: "#BF616A", gray: "#DCDCDC"}
        }]).controller("HeaderCtrl", ["$scope", function() {
        }]).controller("NavContainerCtrl", ["$scope", function() {
        }]).controller("NavCtrl", ["$scope", "taskStorage", "filterFilter", function($scope, taskStorage, filterFilter) {
            var tasks;
            return tasks = $scope.tasks = taskStorage.get(), $scope.taskRemainingCount = filterFilter(tasks, {completed: !1}).length, $scope.$on("taskRemaining:changed", function(event, count) {
                return $scope.taskRemainingCount = count
            })
        }]).controller("DashboardCtrl", ["$scope", function() {
        }])
}.call(this);