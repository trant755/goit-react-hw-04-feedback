import { Box } from 'components/Box';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box as="ul">
      <StatsItem>
        <p>Good: {good}</p>
      </StatsItem>
      <StatsItem>
        <p>Neutral: {neutral}</p>
      </StatsItem>
      <StatsItem>
        <p>Bad: {bad}</p>
      </StatsItem>
      <StatsItem>
        <p>Total: {total}</p>
      </StatsItem>
      <StatsItem>
        <p>Positive feedback: {positivePercentage}%</p>
      </StatsItem>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
