export function printResponse(response: any) {
    console.log("=== Response ====");
    console.log(response.status);
    console.log(response.data + response.statusText);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    return "";
}