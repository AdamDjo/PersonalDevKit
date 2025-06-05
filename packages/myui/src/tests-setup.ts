/* eslint-disable testing-library/no-node-access */

import '@testing-library/jest-dom';
import failOnConsole from 'jest-fail-on-console';

failOnConsole({
    shouldFailOnWarn: false,
});
