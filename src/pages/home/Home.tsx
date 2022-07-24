import { Box } from '@mui/system';
import { FC } from 'react';
import Loader from '../../components/loader/Loader';
import CurrencyConverter from '../../containers/currency-converter/CurrencyConverter';
import useHome from '../../hooks/useHome';
import { ICurrency } from '../../types/currency';

const Home: FC = () => {
  const {
    currencies,
    loading,
    firstInputValue,
    secondInputValue,
    firstSelectedCurrency,
    secondSelectedCurrency,
    setFirstInputValue,
    setSecondInputValue,
    handleFirstSelectorChange,
    handleSecondSelectorChange,
    getInputChangeHandler,
  } = useHome();

  return (
    <Box sx={{ bgcolor: '#ECEFF1' }}>
      {loading ? (
        <Loader />
      ) : (
        <CurrencyConverter
          currencies={currencies}
          firstInputValue={firstInputValue}
          secondInputValue={secondInputValue}
          firstSelectedCurrency={firstSelectedCurrency as ICurrency}
          secondSelectedCurrency={secondSelectedCurrency as ICurrency}
          handleFirstSelectorChange={handleFirstSelectorChange}
          handleSecondSelectorChange={handleSecondSelectorChange}
          handleFirstInputChange={getInputChangeHandler({
            selectedCurrency: firstSelectedCurrency,
            setInputValue: setFirstInputValue,
            otherSelectedCurrency: secondSelectedCurrency,
            setOtherInputValue: setSecondInputValue,
          })}
          handleSecondInputChange={getInputChangeHandler({
            selectedCurrency: secondSelectedCurrency,
            setInputValue: setSecondInputValue,
            otherSelectedCurrency: firstSelectedCurrency,
            setOtherInputValue: setFirstInputValue,
          })}
        />
      )}
    </Box>
  );
};

export default Home;
