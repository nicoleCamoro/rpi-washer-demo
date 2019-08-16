app.onExecute(body => {
    const { requestId } = body;
    const payload = {
        commands: [
            {
                ids: [],
                status: "SUCCESS",
                states: {
                    online: true,
                },
            },
        ],
    };
    for (const input of body.inputs) {
        for (const command of input.payload.commands) {
            for (const device of command.devices) {
                const deviceId = device.id;
                payload.commands[0].ids.push(deviceId);
                for (const execution of command.execution) {
                    const execCommand = execution.command;
                    const { params } = execution;
                    switch (execCommand) {
                        case "action.devices.commands.OnOff":
                            firebaseRef
                                .child(deviceId)
                                .child("OnOff")
                                .update({
                                    on: params.on,
                                });
                            payload.commands[0].states.on = params.on;
                            break;
                        case "action.devices.commands.StartStop":
                            firebaseRef
                                .child(deviceId)
                                .child("StartStop")
                                .update({
                                    isRunning: params.start,
                                });
                            payload.commands[0].states.isRunning = params.start;
                            break;
                        case "action.devices.commands.PauseUnpause":
                            firebaseRef
                                .child(deviceId)
                                .child("StartStop")
                                .update({
                                    isPaused: params.pause,
                                });
                            payload.commands[0].states.isPaused = params.pause;
                            break;
                        case "action.devices.commands.SetModes": // add
                            firebaseRef
                                .child(deviceId)
                                .child("Modes")
                                .update({
                                    load: params.updateModeSettings.load,
                                });
                            break;
                    }
                }
            }
        }
    }
    return {
        requestId: requestId,
        payload: payload,
    };
});


// "Set the washer to a large load"
