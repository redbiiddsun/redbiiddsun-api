export default function responseFormat(
    status: boolean,
    message: string,
    data: any
) {
    return {
        status,
        message,
        data,
    };
}
