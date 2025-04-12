import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import AdverseActionsPage from '../../pages/AdverseActions';

describe('Adverse Actions component', () => {
  test('renders Adverse Actions page', async () => {
    render(<AdverseActionsPage />);

    expect(screen.queryByText('Adverse Actions')).toBeInTheDocument();
  });
});
