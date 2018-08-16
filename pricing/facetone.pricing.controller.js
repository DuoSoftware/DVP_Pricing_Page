angular
    .module('sfPricing', [])
    .controller('sfPricingController', ['$scope', function ($scope) {
        $scope.activeTab = 'Cloud Stack';
        $scope.activeFeatures = [];
        $scope.date = new Date();
        $scope.sfPackages = [
            {
                name : "Personal - Free",
                price : 0.00,
                billCycle : null,
                features : [
                    {
                        cat : 'Core',
                        features : [{
                            name : '1 Workspace',
                            active : true
                        },{
                            name : 'Limited Collaboration Spaces (Maximum of 5)',
                            active : true
                        },{
                            name : 'Limited Team Users (Maximum of 5)',
                            active : true
                        },{
                            name : '100 Audience Contacts',
                            active : true
                        },{
                            name : '10GB of Documents & Files Storage',
                            active : true
                        },{
                            name : 'Unlimited Paid Audience Contacts',
                            active : false
                        }]
                    }, {
                        cat : 'Communication Channels',
                        features : [{
                            name : 'Emails',
                            active : true
                        },{
                            name : 'Team Chat',
                            active : true
                        },{
                            name : 'Chats from Messenger',
                            active : true
                        },{
                            name : 'Chats from Slack',
                            active : true
                        },{
                            name : 'Chats from Skype',
                            active : true
                        },{
                            name : 'WebChats',
                            active : false
                        },{
                            name : 'Short Messaging Service',
                            active : false
                        },{
                            name : 'Voice',
                            active : false
                        }]
                    }, {
                        cat : 'Collaboration Applications',
                        features : [{
                            name : 'Task',
                            active : true
                        },{
                            name : 'Ticket',
                            active : false
                        },{
                            name : 'Stream',
                            active : true
                        },{
                            name : 'Inbox',
                            active : true
                        },{
                            name : '360 Contact View',
                            active : true
                        },{
                            name : 'Boards',
                            active : true
                        },{
                            name : 'Documents & Files',
                            active : true
                        },{
                            name : 'Scheduling Meeting',
                            active : true
                        }]
                    }],
                active : true
            },{
                name : "Business",
                price : 49.00,
                billCycle : null,
                features : [
                    {
                        cat : 'Core',
                        features : [{
                            name : '2 Workspace',
                            active : true
                        },{
                            name : 'Unlimited Collaboration Spaces',
                            active : true
                        },{
                            name : 'Limited Team Users (Maximum of 10)',
                            active : true
                        },{
                            name : '500 Audience Contacts',
                            active : true
                        },{
                            name : '20GB of Documents & Files Storage',
                            active : true
                        },{
                            name : 'Unlimited Paid Audience Contacts',
                            active : false
                        }]
                    }, {
                        cat : 'Communication Channels',
                        features : [{
                            name : 'Emails',
                            active : true
                        },{
                            name : 'Team Chat',
                            active : true
                        },{
                            name : 'Chats from Messenger',
                            active : true
                        },{
                            name : 'Chats from Slack',
                            active : true
                        },{
                            name : 'Chats from Skype',
                            active : true
                        },{
                            name : 'WebChats',
                            active : true
                        },{
                            name : 'Short Messaging Service',
                            active : false
                        },{
                            name : 'Voice',
                            active : false
                        }]
                    }, {
                        cat : 'Collaboration Applications',
                        features : [{
                            name : 'Task',
                            active : true
                        },{
                            name : 'Ticket',
                            active : true
                        },{
                            name : 'Stream',
                            active : true
                        },{
                            name : 'Inbox',
                            active : true
                        },{
                            name : '360 Contact View',
                            active : true
                        },{
                            name : 'Boards',
                            active : true
                        },{
                            name : 'Documents & Files',
                            active : true
                        },{
                            name : 'Scheduling Meeting',
                            active : true
                        }]
                    }],
                active : false
            },{
                name : "Business Plus",
                price : 199.00,
                billCycle : null,
                features : [
                    {
                        cat : 'Core',
                        features : [{
                            name : '5 Workspace',
                            active : true
                        },{
                            name : 'Unlimited Collaboration Spaces',
                            active : true
                        },{
                            name : 'Unlimited Team Users',
                            active : true
                        },{
                            name : '1000 Audience Contacts',
                            active : true
                        },{
                            name : '100GB of Documents & Files Storage',
                            active : true
                        },{
                            name : 'Unlimited Paid Audience Contacts',
                            active : true
                        }]
                    }, {
                        cat : 'Communication Channels',
                        features : [{
                            name : 'Emails',
                            active : true
                        },{
                            name : 'Team Chat',
                            active : true
                        },{
                            name : 'Chats from Messenger',
                            active : true
                        },{
                            name : 'Chats from Slack',
                            active : true
                        },{
                            name : 'Chats from Skype',
                            active : true
                        },{
                            name : 'WebChats',
                            active : true
                        },{
                            name : 'Short Messaging Service',
                            active : true
                        },{
                            name : 'Voice',
                            active : true
                        }]
                    }, {
                        cat : 'Collaboration Applications',
                        features : [{
                            name : 'Task',
                            active : true
                        },{
                            name : 'Ticket',
                            active : true
                        },{
                            name : 'Stream',
                            active : true
                        },{
                            name : 'Inbox',
                            active : true
                        },{
                            name : '360 Contact View',
                            active : true
                        },{
                            name : 'Boards',
                            active : true
                        },{
                            name : 'Documents & Files',
                            active : true
                        },{
                            name : 'Scheduling Meeting',
                            active : true
                        }]
                    }],
                active : false
            }
        ];
        $scope.ftAddonApps = [
            {
                id : 'addonapp1',
                name : 'Workflow',
                price : 49,
                qtyPrice : 49,
                qty : 1,
                selected : false
            },{
                id : 'addonapp2',
                name : 'Service Level Assurance',
                price : 49,
                qtyPrice : 49,
                qty : 1,
                selected : false
            },{
                id : 'addonapp3',
                name : 'Automated Resource Selector and Task Distributor',
                price : 79,
                qtyPrice : 79,
                qty : 1,
                selected : false
            }
        ];
        $scope.ftChatBots = [
            {
                id : 'chatbot1',
                name : 'ChatBots with AI - Self Managed',
                price : 24,
                qtyPrice : 24,
                qty : 1,
                selected : false
            },{
                id : 'chatbot2',
                name : 'ChatBots with AI - Kickstarter',
                price : 149,
                qtyPrice : 149,
                qty : 1,
                selected : false
            },{
                id : 'chatbot3',
                name : 'ChatBots with AI - Managed',
                price : 299,
                qtyPrice : 299,
                qty : 1,
                selected : false
            }
        ];
        $scope.ftAutomations = [
            {
                id : 'automation1',
                name : 'Automations - Self Managed',
                price : 24,
                qtyPrice : 24,
                qty : 1,
                selected : false
            }, {
                id : 'automation2',
                name : 'Automation - Kickstarter',
                price : 149,
                qtyPrice : 149,
                qty : 1,
                selected : false
            }, {
                id : 'automation3',
                name : 'Automation - Managed',
                price : 299,
                qtyPrice : 299,
                qty : 1,
                selected : false
            }
        ];
        $scope.ftVoice = {
            voiceaddons : [
                {
                    id : 'voiceline',
                    name : 'Voice Line with number',
                    price : 3,
                    qtyPrice : 3,
                    qty : 1,
                    billCycle : 'per month',
                    selected : false
                }, {
                    id : 'voiceressys',
                    name : 'Interactive Voice Response System',
                    price : 14,
                    qtyPrice : 14,
                    qty : 1,
                    billCycle : '',
                    selected : false
                }
            ],
            voicechannels : {
                qty : 0,
                price : 0
            }
        };
        $scope.activeFeatures = $scope.sfPackages[0].features;
        $scope.selectedComPlan = {};

        $scope.ftPricingEstimation = {
            selectedPlan : {
                name : $scope.sfPackages[0].name,
                price : $scope.sfPackages[0].price
            },
            additionalAudience : {
                qty : 0,
                price : 0
            },
            addonAppsPrice : 0,
            addonChatbotsPrice : 0,
            addonAutomationsPrice : 0,
            addonVoicePrice : 0,
            additionalGB : {
                qty : 0,
                price : 0
            },
            total : 0
        };

        // Methods
        /* --------------------------- HELERS --------------------------- */
        $scope.$watch(function () {
            $scope.ftPricingEstimation.total =
                $scope.ftPricingEstimation.selectedPlan.price +
                $scope.ftPricingEstimation.additionalAudience.price +
                $scope.ftPricingEstimation.addonAppsPrice +
                $scope.ftPricingEstimation.addonChatbotsPrice +
                $scope.ftPricingEstimation.addonAutomationsPrice +
                $scope.ftPricingEstimation.addonVoicePrice +
                $scope.ftPricingEstimation.additionalGB.price;
        });
        $scope.updateAddon = function (app, apps, selector, callback) {
            // $scope.ftPricingEstimation.addonAppsPrice = $scope.calculateQtyVlaue(qty, $scope.selectedComPlan.price);
            // $scope.ftPricingEstimation.selectedPlan.DT = tempSelectedPlanTrans + $scope.calculateQtyVlaue(qty, $scope.selectedComPlan.trans);
            // $scope.ftPricingEstimation.selectedPlan.BS = tempSelectedPlanDisk + $scope.calculateQtyVlaue(qty, $scope.selectedComPlan.disk);

            app.qtyPrice = 0;
            app.qtyPrice += $scope.calculateQtyVlaue(app.price, app.qty);
            $scope.ftPricingEstimation[selector] = 0;
            angular.forEach(apps, function (p, i) {
                if (p.selected) {
                    $scope.ftPricingEstimation[selector] += p.qtyPrice;
                }
            });

            if(callback) $scope.voiceChannelsPricing($scope.ftVoice.voicechannels.qty);
        };
        $scope.calculateQtyVlaue = function (qty, val) {
            return (qty*val);
        };
        /* END ----------------------- HELERS --------------------------- */

        $scope.updatePackage = function (pack) {
            $scope.ftPricingEstimation.selectedPlan = pack;
            tempSelectedPlanTrans = pack.DT;
            tempSelectedPlanDisk = pack.BS;
            $scope.selectedComPlan = {};
            $.each($scope.sfPackages, function (i, p) {
                p.active = false;
                if (p.name === pack.name) {
                    $scope.activeFeatures = [];
                    $scope.activeFeatures = p.features;
                    p.active = true;
                }
            });
        };
        $scope.setAddon = function (addon, addons, selector, e, callback) {
            var elem = e.toElement;
            if (!$(elem).hasClass('aahdQty')) {
                addon.selected = !addon.selected;
                $scope.updateAddon(addon, addons , selector, callback);
                if (!addon.selected) {
                    addon.qty = 1;
                }
            }
        };
        $scope.updateAdditionalAudience = function (qty) {
            if (qty <= 999 ) {
                return 0;
            } else if (qty >= 1000 && qty <= 5000) {
                return 49;
            } else if (qty >= 5000 && qty <= 25000) {
                return 99;
            } else if (qty > 25000) {
                return (qty * 0.0095);
            }
        };
        $scope.voiceChannelsPricing = function (qty) {
            let tempAddonPrice = 0;
            $scope.ftPricingEstimation.addonVoicePrice = 0;
            let qtyVCPrice = $scope.calculateQtyVlaue(qty, 3);
            angular.forEach($scope.ftVoice.voiceaddons, function (p, i) {
                if (p.selected) {
                    tempAddonPrice += p.qtyPrice;
                }
            });
            $scope.ftPricingEstimation.addonVoicePrice = qtyVCPrice + tempAddonPrice;
        }
    }]);