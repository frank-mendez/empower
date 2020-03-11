import React from 'react';
import {
  EuiButton,
  EuiCheckboxGroup,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiFilePicker,
  EuiLink,
  EuiRange,
  EuiSelect,
  EuiSpacer,
  EuiSwitch,
  EuiText
} from '@elastic/eui';

const User = () => {
  return (
    <EuiForm>
      <EuiFormRow label='Text field' helpText='I am some friendly help text.'>
        <EuiFieldText name='first' />
      </EuiFormRow>

      <EuiFormRow
        label='Select (with no initial selection)'
        labelAppend={
          <EuiText size='xs'>
            <EuiLink>Link to some help</EuiLink>
          </EuiText>
        }
      >
        <EuiSelect
          hasNoInitialSelection
          options={[
            { value: 'option_one', text: 'Option one' },
            { value: 'option_two', text: 'Option two' },
            { value: 'option_three', text: 'Option three' }
          ]}
        />
      </EuiFormRow>

      <EuiFormRow label='File picker'>
        <EuiFilePicker />
      </EuiFormRow>

      <EuiFormRow label='Range'>
        <EuiRange min={0} max={100} name='range' id='range' />
      </EuiFormRow>

      <EuiFormRow
        label="Use a switch instead of a single checkbox and set 'hasChildLabel' to false"
        hasChildLabel={false}
      >
        <EuiSwitch name='switch' label='Should we do this?' />
      </EuiFormRow>

      <EuiSpacer />

      <EuiCheckboxGroup
        legend={{
          children:
            'Checkbox groups should use the `legend` prop instead of form row'
        }}
      />

      <EuiSpacer />

      <EuiButton type='submit' fill>
        Save form
      </EuiButton>
    </EuiForm>
  );
};

export default User;
