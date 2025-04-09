import '@testing-library/jest-dom';
// Mock TextEncoder/TextDecoder
class MockTextEncoder {
  encode(): Uint8Array {
    return new Uint8Array([]);
  }
}

class MockTextDecoder {
  decode(): string {
    return '';
  }
}

globalThis.TextEncoder = MockTextEncoder as any;
globalThis.TextDecoder = MockTextDecoder as any;
