import React, { useCallback, useMemo } from "react";
import { FieldHookConfig, useField } from 'formik';
import Select, { ActionMeta, ValueType, OptionTypeBase } from 'react-select';

import { genersData } from '../../../assets/data/geners';

type ArrayTextFieldProps = FieldHookConfig<string[]> & {
	title: string
};

export function SelectField(props: ArrayTextFieldProps): JSX.Element {
  const [field, meta, helpers] = useField<string[]>(props);
  const { title } = props
  
  const errorSelect = meta.touched && meta.error ? "react-multi-select-container--error" : "";

  const allGeners = useMemo(() => 
                            genersData.map((gener) => { return {value: gener, label: gener} }), []);

  const selectedGeners = useMemo(() => 
    allGeners.filter(gener => meta.value.find((valueGenerFromCombobox) => gener.value === valueGenerFromCombobox)), 
    [allGeners, meta.value])

    const handleSelectChange = useCallback(
    
      (genersSelect: ValueType<OptionTypeBase, boolean>, actionMeta: ActionMeta<OptionTypeBase>): void => {
        let changedGeners = genersSelect?.map(gener => gener.value);
        changedGeners = changedGeners ? changedGeners : [];
    
        helpers.setValue(changedGeners, true);
        helpers.setTouched(true);
      },
      
      [helpers]
    );

  return (
    <>
        <div className="field">
          <div className="field__title">{title}</div> 
          <Select
            {...field} 
            closeMenuOnSelect={false}
            className={`react-multi-select-container ${errorSelect}`}
            classNamePrefix="react-multi-select"
            isMulti
            value={selectedGeners}
            options={allGeners}
            onChange={handleSelectChange}
          />
          {meta.touched && meta.error  &&
          <div className="field__error-message">{meta.error}</div>}
        </div>
    </>
  );
}

export default SelectField