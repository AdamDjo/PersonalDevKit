import { render, screen } from '@testing-library/react';
import { StatusBadge } from './StatusBadge';

describe('StatusBadge tests', () => {
  test('StatusBadge renders correctly with default props', () => {
    render(<StatusBadge>Chaine</StatusBadge>);
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).toHaveClass('sys-lab-4');
    expect(statusBadge).toHaveClass('myui-bg-status-badge-default');
  });

  test('StatusBadge renders correctly with important props', () => {
    render(<StatusBadge important>Chaine</StatusBadge>);
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).toHaveClass('sys-lab-4-sb');
    expect(statusBadge).toHaveClass('myui-bg-status-badge-default');
  });

  test('StatusBadge renders correctly with variant critical', () => {
    render(<StatusBadge variant="critical">Chaine</StatusBadge>);
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).toHaveClass('myui-bg-status-badge-critical');
  });

  test('StatusBadge renders correctly with variant warning', () => {
    render(<StatusBadge variant="warning">Chaine</StatusBadge>);
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).toHaveClass('myui-bg-status-badge-warning');
  });

  test('StatusBadge renders correctly with variant success', () => {
    render(<StatusBadge variant="success">Chaine</StatusBadge>);
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).toHaveClass('myui-bg-status-badge-success');
  });

  test('StatusBadge renders correctly with variant info', () => {
    render(<StatusBadge variant="info">Chaine</StatusBadge>);
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).toHaveClass('myui-bg-status-badge-info');
  });

  test('StatusBadge renders correctly with pip neutral', () => {
    render(
      <StatusBadge variant="neutral" pip>
        Chaine
      </StatusBadge>
    );
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).not.toHaveClass('myui-bg-status-badge-default');
    expect(statusBadge.childNodes[0]).toHaveClass('myui-bg-status-pip-default');
  });

  test('StatusBadge renders correctly with pip critical', () => {
    render(
      <StatusBadge variant="critical" pip>
        Chaine
      </StatusBadge>
    );
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).not.toHaveClass('myui-bg-status-badge-critical');
    expect(statusBadge.childNodes[0]).toHaveClass(
      'myui-bg-status-pip-critical'
    );
  });

  test('StatusBadge renders correctly with pip warning', () => {
    render(
      <StatusBadge variant="warning" pip>
        Chaine
      </StatusBadge>
    );
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).not.toHaveClass('myui-bg-status-badge-warning');
    expect(statusBadge.childNodes[0]).toHaveClass('myui-bg-status-pip-warning');
  });

  test('StatusBadge renders correctly with pip success', () => {
    render(
      <StatusBadge variant="success" pip>
        Chaine
      </StatusBadge>
    );
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).not.toHaveClass('myui-bg-status-badge-success');
    expect(statusBadge.childNodes[0]).toHaveClass('myui-bg-status-pip-success');
  });

  test('StatusBadge renders correctly with pip info', () => {
    render(
      <StatusBadge variant="info" pip>
        Chaine
      </StatusBadge>
    );
    const statusBadge = screen.getByText('Chaine');
    expect(statusBadge).toBeInTheDocument();
    expect(statusBadge).not.toHaveClass('myui-bg-status-badge-info');
    expect(statusBadge.childNodes[0]).toHaveClass('myui-bg-status-pip-info');
  });
});
