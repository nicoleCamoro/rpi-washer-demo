app.onSync(body => {
    return {
        requestId: "ff36a3cc-ec34-11e6-b1a0-64510650abcf",
        payload: {
            agentUserId: "123",
            devices: [
                {
                    id: "washer",
                    type: "action.devices.types.WASHER",
                    traits: [
                        "action.devices.traits.OnOff",
                        "action.devices.traits.StartStop",
                        "action.devices.traits.RunCycle",
                        "action.devices.traits.Modes",
                        "action.devices.traits.Toggles",
                    ],
                    name: {
                        defaultNames: ["My Washer"],
                        name: "Washer",
                        nicknames: ["Washer"],
                    },
                    deviceInfo: {
                        manufacturer: "Acme Co",
                        model: "acme-washer",
                        hwVersion: "1.0",
                        swVersion: "1.0.1",
                    },
                    attributes: {
                        pausable: true,
                        availableModes: [
                            {
                                name: "load",
                                name_values: [
                                    {
                                        name_synonym: ["load"],
                                        lang: "en",
                                    },
                                ],
                                settings: [
                                    {
                                        setting_name: "small",
                                        setting_values: [
                                            {
                                                setting_synonym: ["small"],
                                                lang: "en",
                                            },
                                        ],
                                    },
                                    {
                                        setting_name: "large",
                                        setting_values: [
                                            {
                                                setting_synonym: ["large"],
                                                lang: "en",
                                            },
                                        ],
                                    },
                                ],
                                ordered: true,
                            },
                        ],
                        availableToggles: [
                            {
                                name: "Turbo",
                                name_values: [
                                    {
                                        name_synonym: ["turbo"],
                                        lang: "en",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    };
});
