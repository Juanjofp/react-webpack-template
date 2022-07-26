export function buildLogServiceMock() {
    const info = jest.fn();
    const warn = jest.fn();
    const error = jest.fn();

    function mockClear() {
        info.mockClear();
        warn.mockClear();
        error.mockClear();
    }

    return {
        info,
        warn,
        error,
        mockClear
    };
}
