app.onSync(body => {
    return {
        requestId: body.requestId,
        payload: {
            agentUserId: "123",
            devices: [
                {
                    id: "washer",
                    type: "action.devices.types.WASHER",
                    traits: [
                        "action.devices.traits.OnOff",
                        "action.devices.traits.StartStop", // add
                        "action.devices.traits.RunCycle", // add
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
                    attributes: { //add
                        pausable: true,
                    },
                },
            ],
        },
    };
});


// re-link after deploy
