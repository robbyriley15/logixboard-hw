import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 'auto',
    },
  },
};

function getStyles(value: string, selectedValues: string[], theme: Theme) {
  return {
    fontWeight:
      selectedValues.indexOf(value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MultipleSelectDropdown(props: {values: string[], label: string, onChange: (values: string[]) => any}) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedValues, setValues] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValues(event.target.value as string[]);
    props.onChange(event.target.value as string[]);
  };

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="multi-select-label">{props.label}</InputLabel>
        <Select
          labelId="multi-select-label"
          id="mutiple-select"
          multiple
          value={selectedValues}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {props.values.map((value) => (
            <MenuItem key={value} value={value} style={getStyles(value, selectedValues, theme)}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}