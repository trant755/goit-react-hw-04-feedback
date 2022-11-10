import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" style={{ gap: '8px' }} display="flex">
      {options.map(optn => (
        <li key={optn}>
          <button
            style={{ textTransform: 'capitalize' }}
            type="button"
            name={optn}
            onClick={onLeaveFeedback}
          >
            {optn}
          </button>
        </li>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
