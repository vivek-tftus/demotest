const { ZenRows } = require("zenrows");

(async () => {
    const client = new ZenRows("910692564ee41314f9d5e0d577be653f10daf9fb");
    const url = "https://pawsindia.com/challenge";

    try {
        const { data } = await client.get(url, {
			"js_render": "true",
			"premium_proxy": "true"
});
        console.log(data);
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            console.error(error.response.data);
        }
    }
})();
