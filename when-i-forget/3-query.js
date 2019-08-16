app.onQuery(async body => {
    const { requestId } = body;
    const payload = {
        devices: {},
    };
    const queryPromises = [];
    for (const input of body.inputs) {
        for (const device of input.payload.devices) {
            const deviceId = device.id;
            queryPromises.push(
                queryDevice(deviceId).then(data => {
                    // Add response to device payload
                    payload.devices[deviceId] = data;
                })
            );
        }
    }
    // Wait for all promises to resolve
    await Promise.all(queryPromises);
    return {
        requestId: requestId,
        payload: payload,
    };
});


// "Is my washer on?"

// "Is my washer running?"
