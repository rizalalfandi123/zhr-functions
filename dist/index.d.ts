import * as react_hook_form from 'react-hook-form';
import { UseFormProps, UseFormReturn, Control, UseFieldArrayProps } from 'react-hook-form';
import * as yup from 'yup';
import * as _tanstack_react_query_build_legacy_types from '@tanstack/react-query/build/legacy/types';
import { UseMutationOptions, UseInfiniteQueryOptions, UndefinedInitialDataInfiniteOptions, UseQueryOptions } from '@tanstack/react-query';
import * as reactQuery from '@tanstack/react-query';
export { reactQuery };
import * as axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios';
import { TErrorAPIV3Res, TParams, TResPagination, TModified } from 'zhr-types';
export * from 'zhr-constants';

declare const validationSchema$d: yup.ObjectSchema<{
    username: string;
    password: string;
}, yup.AnyObject, {
    username: undefined;
    password: undefined;
}, "">;
type TLoginBodyReq = yup.InferType<typeof validationSchema$d>;
declare const useLoginForm: (props?: UseFormProps<TLoginBodyReq>) => UseFormReturn<TLoginBodyReq>;

declare const validationSchema$c: yup.ObjectSchema<{
    id: string | undefined;
    type: {};
    product: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        unit_price?: number | undefined;
        unit_cogs?: number | undefined;
        description?: string | undefined;
        selling_prices?: {
            customer_classification: {
                id?: string | undefined;
            } | null;
            department: {
                id?: string | undefined;
            } | null;
            currency: {
                id?: string | undefined;
            };
            unit: {
                id?: string | undefined;
            };
            quantity: {
                minimum?: number | undefined;
                maximum?: number | undefined;
            };
            due_days: {
                minimum?: number | undefined;
                maximum?: number | undefined;
            } | null;
            price: {
                amount?: number | undefined;
            };
        }[] | undefined;
    };
    account: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    budget: {} | null | undefined;
    quantity: number;
    unit: {
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        conversion?: number | undefined;
        conversion_value?: number | undefined;
        is_base?: boolean | undefined;
    } | null;
    total: number | undefined;
    note: string | undefined;
    unit_price: number | undefined;
    total_product: number | undefined;
    discount: {
        type?: string | undefined;
        rate?: number | undefined;
        amount?: number | undefined;
    } | null;
    taxes: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        rate?: number | undefined;
        amount?: number | undefined;
    }[] | null | undefined;
    department: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    } | null;
    project: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    } | null;
    global_line_number: string | undefined;
    description_on_invoice: string | undefined;
    description_on_payment: string | undefined;
    is_inclusive_tax_unit_price: number | undefined;
    unit_price_after_tax: number | undefined;
    product_prices: ({} | undefined)[] | null | undefined;
    discounts: ({} | undefined)[] | null | undefined;
    unit_conversions: {
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        conversion?: number | undefined;
        conversion_value?: number | undefined;
        is_base?: boolean | undefined;
    }[] | null | undefined;
    line_number: number | undefined;
    warehouse: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    } | null;
    amount: number | undefined;
    description: string | null | undefined;
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    product: {
        id: undefined;
        name: undefined;
        code: undefined;
        unit_price: undefined;
        unit_cogs: undefined;
        description: undefined;
        selling_prices: "";
    };
    account: {
        id: undefined;
        name: undefined;
        code: undefined;
    };
    budget: undefined;
    quantity: undefined;
    unit: {
        id: undefined;
        code: undefined;
        name: undefined;
        label: undefined;
        value: undefined;
        conversion: undefined;
        conversion_value: undefined;
        is_base: undefined;
    };
    total: undefined;
    note: undefined;
    unit_price: undefined;
    total_product: undefined;
    discount: {
        type: undefined;
        rate: undefined;
        amount: undefined;
    };
    taxes: "";
    department: {
        id: undefined;
        name: undefined;
        code: undefined;
    };
    project: {
        id: undefined;
        name: undefined;
        code: undefined;
    };
    global_line_number: undefined;
    description_on_invoice: undefined;
    description_on_payment: undefined;
    is_inclusive_tax_unit_price: undefined;
    unit_price_after_tax: undefined;
    product_prices: "";
    discounts: "";
    unit_conversions: "";
    line_number: undefined;
    warehouse: {
        id: undefined;
        name: undefined;
        code: undefined;
    };
    amount: undefined;
    description: undefined;
}, "">;
type TLineItemBodyReq = yup.InferType<typeof validationSchema$c>;
declare const useFormLineItem: (props?: UseFormProps<TLineItemBodyReq>) => UseFormReturn<TLineItemBodyReq>;

declare const validationSchema$b: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    is_active: false;
}, "">;
type TProductionIssuesForm = yup.InferType<typeof validationSchema$b>;
declare const useProductionIssuesForm: (props?: UseFormProps<TProductionIssuesForm>) => UseFormReturn<TProductionIssuesForm>;

declare const plantValidationSchema: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    address: string | undefined;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    address: undefined;
    is_active: false;
}, "">;
type TPlantsForm = yup.InferType<typeof plantValidationSchema>;
declare const usePlantsForm: (props?: UseFormProps<TPlantsForm>) => UseFormReturn<TPlantsForm>;

declare const machineValidationSchema: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    type: string | undefined;
    line_speed: number;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    type: undefined;
    line_speed: 0;
    is_active: false;
}, "">;
type TMachineForm = yup.InferType<typeof machineValidationSchema>;
declare const useMachineForm: (props?: UseFormProps<TMachineForm>) => UseFormReturn<TMachineForm>;

declare const validationSchema$a: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    is_active: false;
}, "">;
type TLineProductionsForm = yup.InferType<typeof validationSchema$a>;
declare const useLineProductionsForm: (props?: UseFormProps<TLineProductionsForm>) => UseFormReturn<TLineProductionsForm>;

declare const productionPhaseFormSchema: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    is_active: boolean;
    is_packing: boolean;
    machines: {
        name: string;
        code: string;
    }[] | undefined;
    quality_check_items: {
        name?: string | undefined;
    }[];
    substages: {
        name?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
        unit: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    color: string;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    is_active: false;
    is_packing: false;
    machines: "";
    quality_check_items: never[];
    substages: "";
    color: undefined;
}, "">;
declare const productionPhaseFilterFormSchema: yup.ObjectSchema<{
    date: {
        $gte?: string | undefined;
        $lte?: string | undefined;
    };
}, yup.AnyObject, {
    date: {
        $gte: undefined;
        $lte: undefined;
    };
}, "">;
type TProductionPhaseForm = yup.InferType<typeof productionPhaseFormSchema>;
type TProductionPhaseFilterForm = yup.InferType<typeof productionPhaseFilterFormSchema>;
declare const useProductionPhaseForm: (props?: UseFormProps<TProductionPhaseForm>) => UseFormReturn<TProductionPhaseForm>;
declare const useProductionPhaseFilterForm: (props?: UseFormProps<TProductionPhaseFilterForm>) => UseFormReturn<TProductionPhaseFilterForm>;
declare const useProductionPhaseQualityCheckItemsForm: ({ control, ...options }: {
    control: Control<TProductionPhaseForm>;
} & Partial<UseFieldArrayProps<{
    description?: string | undefined;
    machines?: {
        name: string;
        code: string;
    }[] | undefined;
    substages?: {
        name?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
        unit: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    is_packing: boolean;
    quality_check_items: {
        name?: string | undefined;
    }[];
    color: string;
}, "quality_check_items">>) => react_hook_form.UseFieldArrayReturn<{
    description?: string | undefined;
    machines?: {
        name: string;
        code: string;
    }[] | undefined;
    substages?: {
        name?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
        unit: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    is_packing: boolean;
    quality_check_items: {
        name?: string | undefined;
    }[];
    color: string;
}, "quality_check_items", "id">;
declare const useProductionPhaseSubStagesForm: ({ control, ...options }: {
    control: Control<TProductionPhaseForm>;
} & Partial<UseFieldArrayProps<{
    description?: string | undefined;
    machines?: {
        name: string;
        code: string;
    }[] | undefined;
    substages?: {
        name?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
        unit: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    is_packing: boolean;
    quality_check_items: {
        name?: string | undefined;
    }[];
    color: string;
}, "substages">>) => react_hook_form.UseFieldArrayReturn<{
    description?: string | undefined;
    machines?: {
        name: string;
        code: string;
    }[] | undefined;
    substages?: {
        name?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
        unit: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    is_packing: boolean;
    quality_check_items: {
        name?: string | undefined;
    }[];
    color: string;
}, "substages", "id">;

declare const validationSchema$9: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    is_active: false;
}, "">;
type TProductionCategoriesForm = yup.InferType<typeof validationSchema$9>;
declare const useProductionCategoriesForm: (props?: UseFormProps<TProductionCategoriesForm>) => UseFormReturn<TProductionCategoriesForm>;

declare const validationSchema$8: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    role: {} | undefined;
    schedule: {} | undefined;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    role: {};
    schedule: {};
    is_active: false;
}, "">;
type TLaboursForm = yup.InferType<typeof validationSchema$8>;
declare const useLaboursForm: (props?: UseFormProps<TLaboursForm>) => UseFormReturn<TLaboursForm>;

declare const validationSchema$7: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    is_active: false;
}, "">;
type TJobRoleForm = yup.InferType<typeof validationSchema$7>;
declare const useJobRoleForm: (props?: UseFormProps<TJobRoleForm>) => UseFormReturn<TJobRoleForm>;

declare const validationSchema$6: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    is_active: boolean;
    clock_start: string | undefined;
    clock_end: string | undefined;
    shifts: {
        number?: string | undefined;
        name?: string | undefined;
        clock_start?: string | undefined;
        clock_end?: string | undefined;
    }[] | undefined;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    is_active: false;
    clock_start: undefined;
    clock_end: undefined;
    shifts: "";
}, "">;
type TSchedulesForm = yup.InferType<typeof validationSchema$6>;
declare const useSchedulesForm: (props?: UseFormProps<TSchedulesForm>) => UseFormReturn<TSchedulesForm>;
declare const useSchedulesShiftsForm: ({ control, ...options }: {
    control: Control<TSchedulesForm>;
} & Partial<UseFieldArrayProps<{
    description?: string | undefined;
    clock_start?: string | undefined;
    clock_end?: string | undefined;
    shifts?: {
        number?: string | undefined;
        name?: string | undefined;
        clock_start?: string | undefined;
        clock_end?: string | undefined;
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
}, "shifts">>) => react_hook_form.UseFieldArrayReturn<{
    description?: string | undefined;
    clock_start?: string | undefined;
    clock_end?: string | undefined;
    shifts?: {
        number?: string | undefined;
        name?: string | undefined;
        clock_start?: string | undefined;
        clock_end?: string | undefined;
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
}, "shifts", "id">;

declare const validationSchema$5: yup.ObjectSchema<{
    month: {
        value?: number | undefined;
        label?: string | undefined;
    };
    year: {
        value?: number | undefined;
        label?: string | undefined;
    };
    is_active: boolean;
}, yup.AnyObject, {
    month: {
        label: undefined;
        value: undefined;
    };
    year: {
        label: undefined;
        value: undefined;
    };
    is_active: false;
}, "">;
type TOperatorScheduleForm = yup.InferType<typeof validationSchema$5>;
declare const useOperatorScheduleForm: (props?: UseFormProps<TOperatorScheduleForm>) => UseFormReturn<TOperatorScheduleForm>;

declare const validationSchema$4: yup.ObjectSchema<{
    account: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    amount: number;
    code: string;
    currency: {
        symbol?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    description: string | undefined;
    is_active: NonNullable<boolean | undefined>;
    name: string;
    unit: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        description?: string | undefined;
        is_active?: boolean | undefined;
    };
}, yup.AnyObject, {
    account: {
        code: undefined;
        id: undefined;
        name: undefined;
    };
    amount: 0;
    code: undefined;
    currency: {
        code: undefined;
        id: undefined;
        name: undefined;
        symbol: undefined;
    };
    description: undefined;
    is_active: false;
    name: undefined;
    unit: {
        code: undefined;
        description: undefined;
        id: undefined;
        is_active: undefined;
        name: undefined;
    };
}, "">;
type TStandardCostForm = yup.InferType<typeof validationSchema$4>;
declare const useStandardCostForm: (props?: UseFormProps<TStandardCostForm>) => UseFormReturn<TStandardCostForm>;

declare const bomSchemaValidation: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    unit: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    phases: {
        number?: number | undefined;
        parent?: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        } | undefined;
        phase?: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        } | undefined;
        proportion?: number | undefined;
        is_grup_by_id: boolean;
        is_use_base_unit: boolean;
        formula: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    is_active: boolean;
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    unit: {
        code: undefined;
        id: undefined;
        name: undefined;
    };
    phases: "";
    is_active: false;
}, "">;
type TBillOfMaterialsForm = yup.InferType<typeof bomSchemaValidation>;
declare const useBillOfMaterialsForm: (props?: UseFormProps<TBillOfMaterialsForm>) => UseFormReturn<TBillOfMaterialsForm>;
declare const useBillOfMaterialsPhasesForm: ({ control, ...options }: {
    control: Control<TBillOfMaterialsForm>;
} & Partial<UseFieldArrayProps<{
    description?: string | undefined;
    phases?: {
        number?: number | undefined;
        parent?: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        } | undefined;
        phase?: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        } | undefined;
        proportion?: number | undefined;
        is_grup_by_id: boolean;
        is_use_base_unit: boolean;
        formula: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    name: string;
    code: string;
    unit: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    is_active: boolean;
}, "phases">>) => react_hook_form.UseFieldArrayReturn<{
    description?: string | undefined;
    phases?: {
        number?: number | undefined;
        parent?: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        } | undefined;
        phase?: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        } | undefined;
        proportion?: number | undefined;
        is_grup_by_id: boolean;
        is_use_base_unit: boolean;
        formula: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    name: string;
    code: string;
    unit: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    is_active: boolean;
}, "phases", "id">;

declare const validationSchema$3: yup.ObjectSchema<{
    orders: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    }[] | undefined;
    customer: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    date: string;
    due_date: string | null | undefined;
    start_date: string;
    finish_date: {
        estimation: string;
    };
    number: string;
    description: string | undefined;
    is_internal: boolean;
    is_active: boolean;
    plant: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    finish_goods: {
        note?: {
            content?: string | null | undefined;
        } | null | undefined;
        order_id?: string | undefined;
        number: number;
        description: string;
        unit: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        quantity: number;
        product: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        bom: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        customer: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        is_expanded: boolean;
    }[];
}, yup.AnyObject, {
    orders: "";
    customer: {
        code: undefined;
        id: undefined;
        name: undefined;
    };
    date: undefined;
    due_date: undefined;
    start_date: undefined;
    finish_date: {
        estimation: undefined;
    };
    number: undefined;
    description: undefined;
    is_internal: false;
    is_active: false;
    plant: {
        code: undefined;
        id: undefined;
        name: undefined;
    };
    finish_goods: never[];
}, "">;
type TProductionPlansForm = yup.InferType<typeof validationSchema$3>;
declare const useProductionPlansForm: (props?: UseFormProps<TProductionPlansForm>) => UseFormReturn<TProductionPlansForm>;
declare const useProductionPlansFinishGoodsForm: ({ control, ...options }: {
    control: Control<TProductionPlansForm>;
} & Partial<UseFieldArrayProps<{
    description?: string | undefined;
    orders?: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    }[] | undefined;
    due_date?: string | null | undefined;
    number: string;
    is_active: boolean;
    date: string;
    customer: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    is_internal: boolean;
    start_date: string;
    finish_date: {
        estimation: string;
    };
    plant: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    finish_goods: {
        note?: {
            content?: string | null | undefined;
        } | null | undefined;
        order_id?: string | undefined;
        number: number;
        description: string;
        unit: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        quantity: number;
        product: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        bom: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        customer: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        is_expanded: boolean;
    }[];
}, "finish_goods">>) => react_hook_form.UseFieldArrayReturn<{
    description?: string | undefined;
    orders?: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    }[] | undefined;
    due_date?: string | null | undefined;
    number: string;
    is_active: boolean;
    date: string;
    customer: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    is_internal: boolean;
    start_date: string;
    finish_date: {
        estimation: string;
    };
    plant: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    finish_goods: {
        note?: {
            content?: string | null | undefined;
        } | null | undefined;
        order_id?: string | undefined;
        number: number;
        description: string;
        unit: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        quantity: number;
        product: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        bom: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        customer: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        is_expanded: boolean;
    }[];
}, "finish_goods", "id">;

declare const formulaFormSchema: yup.ObjectSchema<{
    name: string;
    code: string;
    description: string | undefined;
    is_active: boolean;
    finish_good: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity: number;
    };
    raw_materials: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        formula?: string | undefined;
        material?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        formula_labels?: {
            value?: string | undefined;
            label?: string | undefined;
        }[] | undefined;
        is_raw_material: boolean;
    }[] | undefined;
    scraps: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        scrap?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
    }[] | undefined;
    estimation: {
        line_speed?: number | undefined;
        time?: number | undefined;
        quantity: number;
        machine: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    };
    phase: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
}, yup.AnyObject, {
    name: undefined;
    code: undefined;
    description: undefined;
    is_active: false;
    finish_good: {
        code: undefined;
        id: undefined;
        name: undefined;
        quantity: 1;
        unit: {
            code: undefined;
            id: undefined;
            name: undefined;
        };
    };
    raw_materials: "";
    scraps: "";
    estimation: {
        machine: {
            code: undefined;
            id: undefined;
            name: undefined;
        };
        line_speed: undefined;
        quantity: 1;
        time: undefined;
    };
    phase: {
        code: undefined;
        id: undefined;
        name: undefined;
    };
}, "">;
type TFormulaForm = yup.InferType<typeof formulaFormSchema>;
declare const useFormulaForm: (props?: UseFormProps<TFormulaForm>) => UseFormReturn<TFormulaForm>;
declare const useFormulaRawMaterialsForm: ({ control, ...options }: {
    control: Control<TFormulaForm>;
} & Partial<UseFieldArrayProps<{
    description?: string | undefined;
    raw_materials?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        formula?: string | undefined;
        material?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        formula_labels?: {
            value?: string | undefined;
            label?: string | undefined;
        }[] | undefined;
        is_raw_material: boolean;
    }[] | undefined;
    scraps?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        scrap?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    phase: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    estimation: {
        line_speed?: number | undefined;
        time?: number | undefined;
        quantity: number;
        machine: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    };
    finish_good: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity: number;
    };
}, "raw_materials">>) => react_hook_form.UseFieldArrayReturn<{
    description?: string | undefined;
    raw_materials?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        formula?: string | undefined;
        material?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        formula_labels?: {
            value?: string | undefined;
            label?: string | undefined;
        }[] | undefined;
        is_raw_material: boolean;
    }[] | undefined;
    scraps?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        scrap?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    phase: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    estimation: {
        line_speed?: number | undefined;
        time?: number | undefined;
        quantity: number;
        machine: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    };
    finish_good: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity: number;
    };
}, "raw_materials", "id">;
declare const useFormulaScrapsForm: ({ control, ...options }: {
    control: Control<TFormulaForm>;
} & Partial<UseFieldArrayProps<{
    description?: string | undefined;
    raw_materials?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        formula?: string | undefined;
        material?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        formula_labels?: {
            value?: string | undefined;
            label?: string | undefined;
        }[] | undefined;
        is_raw_material: boolean;
    }[] | undefined;
    scraps?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        scrap?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    phase: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    estimation: {
        line_speed?: number | undefined;
        time?: number | undefined;
        quantity: number;
        machine: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    };
    finish_good: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity: number;
    };
}, "scraps">>) => react_hook_form.UseFieldArrayReturn<{
    description?: string | undefined;
    raw_materials?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        formula?: string | undefined;
        material?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        formula_labels?: {
            value?: string | undefined;
            label?: string | undefined;
        }[] | undefined;
        is_raw_material: boolean;
    }[] | undefined;
    scraps?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        scrap?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    phase: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    estimation: {
        line_speed?: number | undefined;
        time?: number | undefined;
        quantity: number;
        machine: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    };
    finish_good: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity: number;
    };
}, "scraps", "id">;

declare const validationSchema$2: yup.ObjectSchema<{
    name: string;
    schedule: {
        unit: string;
    };
}, yup.AnyObject, {
    name: undefined;
    schedule: {
        unit: undefined;
    };
}, "">;
type TRecurringTransactionsForm = yup.InferType<typeof validationSchema$2>;
declare const useRecurringTransactionsForm: (props?: UseFormProps<TRecurringTransactionsForm>) => UseFormReturn<TRecurringTransactionsForm>;

declare const validationSchema$1: yup.ObjectSchema<{
    name: string;
    data_sources: string;
}, yup.AnyObject, {
    name: undefined;
    data_sources: undefined;
}, "">;
type TReportTemplateForm = yup.InferType<typeof validationSchema$1>;
declare const useReportTemplateForm: (props?: UseFormProps<TReportTemplateForm>) => UseFormReturn<TReportTemplateForm>;

declare const validationSchema: yup.ObjectSchema<{
    quality_checks: {
        head: {
            id?: string | null | undefined;
        } | null;
        operator: {
            id?: string | null | undefined;
        } | null;
        inspector: {
            id?: string | null | undefined;
        } | null;
    }[] | undefined;
}, yup.AnyObject, {
    quality_checks: "";
}, "">;
type TQCInsulatingForm = yup.InferType<typeof validationSchema>;
declare const useQCInsulatingForm: (props?: UseFormProps<TQCInsulatingForm>) => UseFormReturn<TQCInsulatingForm>;
declare const useQCInsulatingFinishGoodsForm: ({ control, ...options }: {
    control: Control<TQCInsulatingForm>;
} & Partial<UseFieldArrayProps<{
    quality_checks?: {
        head: {
            id?: string | null | undefined;
        } | null;
        operator: {
            id?: string | null | undefined;
        } | null;
        inspector: {
            id?: string | null | undefined;
        } | null;
    }[] | undefined;
}, "quality_checks">>) => react_hook_form.UseFieldArrayReturn<{
    quality_checks?: {
        head: {
            id?: string | null | undefined;
        } | null;
        operator: {
            id?: string | null | undefined;
        } | null;
        inspector: {
            id?: string | null | undefined;
        } | null;
    }[] | undefined;
}, "quality_checks", "id">;

declare const workOrderProgressFormSchema: yup.ObjectSchema<{
    date: string;
    start_time: string;
    stop_time: string;
    line_speed: number;
    tolerance_time: number;
    is_auto_complete: boolean;
    is_group_by_id: boolean;
    operators: {
        id?: string | undefined;
    }[];
    machine: {
        id: string;
    } | undefined;
    schedule: {
        id: string;
    };
    raw_materials: any[] | undefined;
    finish_goods: {
        quantity_packing?: number | undefined;
        packing?: {
            id?: string | undefined;
        } | undefined;
        quantity: number;
    }[];
    scraps: {
        quantity: number;
        scrap: {
            id: string;
        };
    }[];
}, yup.AnyObject, {
    date: undefined;
    start_time: undefined;
    stop_time: undefined;
    line_speed: undefined;
    tolerance_time: undefined;
    is_auto_complete: false;
    is_group_by_id: false;
    operators: never[];
    machine: {
        id: undefined;
    };
    schedule: {
        id: undefined;
    };
    raw_materials: undefined;
    finish_goods: "";
    scraps: "";
}, "">;
type TWorkOrderProgressForm = yup.InferType<typeof workOrderProgressFormSchema>;
declare const useWorkOrderProgressForm: (props?: UseFormProps<TWorkOrderProgressForm>) => UseFormReturn<TWorkOrderProgressForm>;
declare const useWorkOrderProgressScrapsForm: ({ control, ...options }: {
    control: Control<TWorkOrderProgressForm>;
} & Partial<UseFieldArrayProps<{
    raw_materials?: any[] | undefined;
    machine?: {
        id: string;
    } | undefined;
    line_speed: number;
    date: string;
    schedule: {
        id: string;
    };
    finish_goods: {
        quantity_packing?: number | undefined;
        packing?: {
            id?: string | undefined;
        } | undefined;
        quantity: number;
    }[];
    scraps: {
        quantity: number;
        scrap: {
            id: string;
        };
    }[];
    start_time: string;
    stop_time: string;
    tolerance_time: number;
    is_auto_complete: boolean;
    is_group_by_id: boolean;
    operators: {
        id?: string | undefined;
    }[];
}, "scraps">>) => react_hook_form.UseFieldArrayReturn<{
    raw_materials?: any[] | undefined;
    machine?: {
        id: string;
    } | undefined;
    line_speed: number;
    date: string;
    schedule: {
        id: string;
    };
    finish_goods: {
        quantity_packing?: number | undefined;
        packing?: {
            id?: string | undefined;
        } | undefined;
        quantity: number;
    }[];
    scraps: {
        quantity: number;
        scrap: {
            id: string;
        };
    }[];
    start_time: string;
    stop_time: string;
    tolerance_time: number;
    is_auto_complete: boolean;
    is_group_by_id: boolean;
    operators: {
        id?: string | undefined;
    }[];
}, "scraps", "id">;

type TPostSession$1 = {
    jwtToken: string;
};
type ResData$w = AxiosResponse<TResPostSession$1>;
type ResError$y = AxiosError<TErrorAPIV3Res>;
declare function usePostSession(options?: Omit<UseMutationOptions<ResData$w, ResError$y, TPostSession$1>, 'mutationFn'>): _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$w, ResError$y, TPostSession$1, unknown>;
type TResPostSession$1 = {
    id?: string;
    zahir_id?: TZahirID$1;
    acl?: Record<string, TACL$1>;
};
type TACL$1 = 'hide' | 'show';
type TZahirID$1 = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    mobile_number?: string;
    telegram_username?: string;
    whatsapp_number?: string;
    client?: TClient$1;
};
type TClient$1 = {
    name?: string;
    expires_in?: string;
    internal_client?: null;
    developer_account?: TDeveloperAccount$1;
};
type TDeveloperAccount$1 = {
    id?: number;
    username?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
};

type ResData$v = AxiosResponse<{
    token: string;
}>;
type ResError$x = AxiosError<TErrorAPIV3Res>;
declare function usePostToken(options?: Omit<UseMutationOptions<ResData$v, ResError$x, TLoginBodyReq>, 'mutationFn'>): _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$v, ResError$x, {
    username: string;
    password: string;
}, unknown>;

type ResError$w = AxiosError<TErrorAPIV3Res>;
declare function useGetCompanies(params?: TParams, options?: Omit<UseInfiniteQueryOptions<TResPagination<TCompanyItem>, ResError$w, TResPagination<TCompanyItem>>, 'queryFn'>): _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<TResPagination<TCompanyItem>, ResError$w>;
type TCompanyItem = {
    id?: string;
    slug?: string;
    email?: string;
    company?: Company;
    company_addons?: unknown[];
    created_at?: Date;
    updated_at?: Date;
    membership_variants?: MembershipVariantElement[];
    mobile_number?: string;
    last_login?: Date;
};
type Company = {
    id?: string;
    name?: string;
    slug?: string;
    slug_alias?: string;
    business?: Business;
    business_type?: BusinessType;
    is_active?: boolean;
    is_on_premise?: boolean;
    owner?: Owner;
    membership?: Membership;
    version?: number;
    image_url?: string;
};
type Business = {
    id?: string;
    name?: string;
};
type BusinessType = {
    id?: number;
    name?: string;
};
type Membership = {
    id?: number;
    type?: string;
    app_name?: string;
    customer_id?: number;
    variant?: MembershipVariant;
    storage?: Storage;
    user_limit?: number;
    department_limit?: number;
    status?: string;
    start_date?: Date;
    expired_date?: Date;
};
type Storage = {
    id?: number;
    type?: string;
    currency?: string;
    price?: number;
    quota?: number;
    usage?: Usage;
};
type Usage = {
    attachment_size?: number;
    db_size?: number;
    total?: number;
};
type MembershipVariant = {
    id?: number;
    name?: string;
    feature_code?: string;
    country_code?: string;
    is_mobile?: string;
    price?: VariantPrice;
};
type VariantPrice = {
    id?: number;
};
type Owner = {
    first_name?: string;
    last_name?: string;
    email?: string;
    mobile_phone?: string;
};
type MembershipVariantElement = {
    id?: number;
    app_id?: number;
    code?: string;
    name?: string;
    variant?: MembershipVariantVariant;
    price?: MembershipVariantPrice;
    start_date?: Date;
    expired_date?: Date;
    status?: string;
    user_limit?: number;
    department_limit?: number;
};
type MembershipVariantPrice = {
    id?: number;
    currency?: null;
    gross_amount?: null;
    net_amount?: null;
    description?: null;
    note?: null;
};
type MembershipVariantVariant = {
    id?: number;
    name?: string;
    country?: string;
    feature?: Record<string, boolean>;
};

type ResError$v = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetAccounts: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TAccountItem>, ResError$v, {
    total: number;
    list: TAccountItem[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TAccountItem[];
}, ResError$v>;
declare const useMutationApiV2GetDetailAccount: (options?: Omit<UseMutationOptions<ResData$u, ResError$v, TAccountItem>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$u, ResError$v, TAccountItem, unknown>;
type TAccountItem = {
    id?: string;
    code?: string;
    name?: string;
    alias_name?: string;
    is_cash?: boolean;
    is_active?: boolean;
    currency?: Currency;
    subclassification?: Classification;
    classification?: Classification;
    created?: TModified;
    updated?: TModified;
    code_formatted?: string;
};
type Classification = {
    id?: string;
    code?: number;
    name?: string;
    alias_name?: string;
};
type Currency = {
    id?: string;
    code?: string;
    name?: string;
    symbol?: string;
    is_base?: boolean;
};
type ResData$u = AxiosResponse<TAccountItem>;

type ResError$u = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetProducts: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TProductItem>, ResError$u, {
    total: number;
    list: TProductItem[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TProductItem[];
}, ResError$u>;
declare const useMutationApiV2GetDetailProducts: (options?: Omit<UseMutationOptions<ResData$t, ResError$u, TProductItem>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$t, ResError$u, TProductItem, unknown>;
type TProductItem = {
    id: string;
    code: string;
    name: string;
    is_active: boolean;
    is_add_on: boolean;
    is_salable: boolean;
    is_purchasable: boolean;
    is_tracked_as_inventory: boolean;
    is_use_serial: boolean;
    is_exclude_cogs: boolean;
    is_use_lot: boolean;
    is_tracking_cogs_using_lot_number: boolean;
    is_use_base_packing: boolean;
    order_over_quantity: {
        is_applied: boolean;
        based_on: string;
        value: number;
    };
    unit_price: number;
    unit_price_after_tax: number;
    is_unit_price_after_tax: boolean;
    unit_cost: number;
    unit_cost_after_tax: number;
    is_unit_cost_after_tax: boolean;
    unit_cogs: number;
    quantity: {
        on_hand: number;
        on_order: number;
        on_hold: number;
        available: number;
    };
    category: {
        id: string;
        name: string;
    };
    catalog: {
        id: string;
        code: string;
        name: string;
    };
    unit: {
        id: string;
        code: string;
        name: string;
    };
    report: {
        unit: {
            id: string;
            code: string;
            name: string;
            conversion_value: number;
        };
    };
    minimum_stock: number;
    main_supplier: {
        id: string;
        code: string;
        name: string;
    };
    default_account: {
        sales: {
            id: string;
            code: string;
            name: string;
        };
        cogs: {
            id: string;
            code: string;
            name: string;
        };
        inventory: {
            id: string;
            code: string;
            name: string;
        };
        partial_deliveries: {
            id: string;
            code: string;
            name: string;
        };
        partial_receipts: {
            id: string;
            code: string;
            name: string;
        };
    };
    created: {
        user: {
            id: string;
            name: string;
            email: string;
        };
        time: string;
    };
    updated: {
        time: string;
    };
    total_amount: number;
};
type ResData$t = AxiosResponse<TProductItem>;

type ResError$t = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetDepartments: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TDepartment>, ResError$t, {
    total: number;
    list: TDepartment[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TDepartment[];
}, ResError$t>;
declare const useQueryApiV2GetDetailDepartments: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$s, ResError$t, TDepartment>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TDepartment, ResError$t>;
declare const useMutationApiV2GetDetailDepartments: (options?: Omit<UseMutationOptions<ResData$s, ResError$t, TDepartment>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$s, ResError$t, TDepartment, unknown>;
type TDepartment = {
    id?: string;
    code?: string;
    name?: string;
    rate?: number;
    is_active?: boolean;
    sales?: Purchases$1;
    purchases?: Purchases$1;
    other_fields?: unknown[];
    created?: TModified;
    updated?: TModified;
};
type Purchases$1 = {
    is_applicable?: boolean;
};
type ResData$s = AxiosResponse<TDepartment>;

type ResError$s = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetProjects: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TProject>, ResError$s, TProject[], [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TProject[];
}, ResError$s>;
declare const useQueryApiV2GetDetailProjects: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$r, ResError$s, TProject>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TProject, ResError$s>;
declare const useMutationApiV2GetDetailProjects: (options?: Omit<UseMutationOptions<ResData$r, ResError$s, TProject>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$r, ResError$s, TProject, unknown>;
type TProject = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
    start_date?: Date;
    finish_date?: Date;
    estimated_finish_date?: null;
    progress_in_percentage?: null;
    contact_person?: null;
    manager?: Manager;
    status?: Status;
    is_selectable?: boolean;
    is_parent?: boolean;
    created?: TModified;
    updated?: TModified;
};
type Manager = {
    id?: string;
    code?: string;
    name?: string;
};
type Status = {
    id?: string;
    name?: string;
};
type ResData$r = AxiosResponse<TProject>;

type ResError$r = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetTaxes: (params?: Record<string, unknown>, options?: Omit<UseInfiniteQueryOptions<TResPagination<TTax>, ResError$r, TTax[]>, 'queryFn' | 'initialPageParam' | 'getNextPageParam' | 'queryKey'>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<TTax[], ResError$r>;
declare const useQueryApiV2GetDetailTaxes: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$q, ResError$r, TTax>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TTax, ResError$r>;
declare const useMutationApiV2GetDetailTaxes: (options?: Omit<UseMutationOptions<ResData$q, ResError$r, TTax>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$q, ResError$r, TTax, unknown>;
type TTax = {
    id?: string;
    code?: string;
    name?: string;
    rate?: number;
    is_active?: boolean;
    sales?: Purchases;
    purchases?: Purchases;
    other_fields?: unknown[];
    created?: TModified;
    updated?: TModified;
};
type Purchases = {
    is_applicable?: boolean;
};
type ResData$q = AxiosResponse<TTax>;

type ResError$q = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetUnits: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TUnit>, ResError$q, {
    total: number;
    list: TUnit[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TUnit[];
}, ResError$q>;
declare const useQueryApiV2GetDetailUnits: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$p, ResError$q, TUnit>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TUnit, ResError$q>;
declare const useMutationApiV2GetDetailUnits: (options?: Omit<UseMutationOptions<ResData$p, ResError$q, TUnit>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$p, ResError$q, TUnit, unknown>;
type TUnit = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
    created?: TModified;
    updated?: TModified;
};
type ResData$p = AxiosResponse<TUnit>;

type ResError$p = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetCurrencies: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TCurrency>, ResError$p, {
    total: number;
    list: TCurrency[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TCurrency[];
}, ResError$p>;
declare const useQueryApiV2GetDetailCurrencies: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$o, ResError$p, TCurrency>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TCurrency, ResError$p>;
declare const useMutationApiV2GetDetailCurrencies: (options?: Omit<UseMutationOptions<ResData$o, ResError$p, TCurrency>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$o, ResError$p, TCurrency, unknown>;
type TCurrency = {
    id: string;
    code: string;
    name: string;
    is_active: boolean;
    symbol: string;
    created?: TModified;
    updated?: TModified;
};
type ResData$o = AxiosResponse<TCurrency>;

type ResError$o = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetContacts: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TContactItem>, ResError$o, {
    total: number;
    list: TContactItem[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TContactItem[];
}, ResError$o>;
declare const useMutationApiV2GetDetailContact: (options?: Omit<UseMutationOptions<ResData$n, ResError$o, TContactItem>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$n, ResError$o, TContactItem, unknown>;
type TContactItem = {
    id: string;
    code: string;
    name: string;
    is_customer: boolean;
    is_supplier: boolean;
    is_employee: boolean;
    is_salesman: boolean;
    is_auto_send_email: boolean;
    is_active: boolean;
    term_of_payment: {
        due_days: number;
        late_charge: number;
        discount_days: number;
        early_discount: number;
    };
    classification: {
        id: string;
        name: string;
    };
    default_currency: {
        id: string;
        code: string;
        name: string;
        symbol: string;
        default_account: {
            cash: {
                id: string;
                code: string;
                name: string;
            };
            bank: {
                id: string;
                code: string;
                name: string;
            };
            payable: {
                id: string;
                code: string;
                name: string;
            };
            receivable: {
                id: string;
                code: string;
                name: string;
            };
            post_dated_cheque_payable: {
                id: string;
                code: string;
                name: string;
            };
            post_dated_cheque_receivable: {
                id: string;
                code: string;
                name: string;
            };
        };
    };
    sales_target_amount: number;
    addresses: {
        id: string;
        is_primary: boolean;
        type: string;
        latitude: number;
        longitude: number;
    }[];
    emails: {
        id: string;
        is_primary: boolean;
    }[];
    other_fields: {
        id: string;
        key: string;
    }[];
    created: {
        user: {
            id: string;
            name: string;
            email: string;
        };
        time: string;
    };
    updated: {
        time: string;
    };
    other_field: {
        default_salesman: string;
    };
};
type ResData$n = AxiosResponse<TContactItem>;

type ResError$n = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetSalesOrders: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TSalesOrderItem>, ResError$n, {
    total: number;
    list: TSalesOrderItem[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TSalesOrderItem[];
}, ResError$n>;
declare const useMutationApiV2GetDetailSalesOrder: (options?: Omit<UseMutationOptions<ResData$m, ResError$n, TSalesOrderItem>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$m, ResError$n, TSalesOrderItem, unknown>;
type TSalesOrderItem = {
    id: string;
    type: string;
    status: string;
    delivery_status: string;
    date: string;
    number: string;
    description: string;
    customer: {
        id: string;
        code: string;
        name: string;
        classification: {
            id: string;
            name: string;
        };
    };
    billing_address: {
        id: string;
    };
    shipping_address: {
        id: string;
    };
    currency: {
        id: string;
        code: string;
        name: string;
        symbol: string;
    };
    exchange_rate: number;
    department: {
        id: string;
        code: number;
        name: string;
    };
    project: {
        id: string;
        code: string;
        name: string;
    };
    warehouse: {
        id: string;
        code: string;
        name: string;
    };
    is_unit_price_after_tax: boolean;
    subtotal_origin: number;
    subtotal: number;
    total_discount_origin: number;
    total_discount: number;
    subtotal_before_tax_origin: number;
    subtotal_before_tax: number;
    total_tax_origin: number;
    total_tax: number;
    total_other_origin: number;
    total_other: number;
    total_amount_origin: number;
    total_amount: number;
    is_need_approval: boolean;
    created: {
        user: {
            id: string;
            name: string;
            email: string;
        };
        time: string;
    };
    updated: {
        user: {
            id: string;
            name: string;
            email: string;
        };
        time: string;
    };
};
type ResData$m = AxiosResponse<TSalesOrderItem>;

type ResError$m = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetRecurringTransactions: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TRecurringTransaction>, ResError$m, {
    total: number;
    list: TRecurringTransaction[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TRecurringTransaction[];
}, ResError$m>;
declare const useQueryApiV2GetDetailRecurringTransactions: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$l, ResError$m, TRecurringTransaction>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TRecurringTransaction, ResError$m>;
declare const useMutationApiV2GetDetailRecurringTransactions: (options?: Omit<UseMutationOptions<ResData$l, ResError$m, TRecurringTransaction>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$l, ResError$m, TRecurringTransaction, unknown>;
type TRecurringTransaction = {
    id: string;
    type: string;
    name: string;
    schedule: {
        repeat_every: number;
        unit: string;
        start_date: string;
        next_date: string;
        format: string;
    };
    created: TModified;
    updated: TModified;
};
type ResData$l = AxiosResponse<TRecurringTransaction>;

type TCreateRecurringTransactionsResponse = {
    message: string;
};
type TCreateRecurringTransactionsPayload = TRecurringTransactionsForm & {
    type: string;
    data: Record<string, unknown>;
};
type TCreateRecurringTransactionsOptions = Partial<UseMutationOptions<TCreateRecurringTransactionsResponse, AxiosError<TErrorAPIV3Res>, TCreateRecurringTransactionsPayload>>;
declare const useCreateRecurringTransactions: (options?: TCreateRecurringTransactionsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateRecurringTransactionsResponse, AxiosError<TErrorAPIV3Res, any>, TCreateRecurringTransactionsPayload, unknown>;

type TUpdateRecurringTransactionsResponse = {
    message: string;
};
type TUpdateRecurringTransactionsPayload = TRecurringTransactionsForm & {
    type: string;
    data: Record<string, unknown>;
    id: string;
};
type TUpdateRecurringTransactionsOptions = Partial<UseMutationOptions<TUpdateRecurringTransactionsResponse, AxiosError<TErrorAPIV3Res>, TUpdateRecurringTransactionsPayload>>;
declare const useUpdateRecurringTransactions: (options?: TUpdateRecurringTransactionsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateRecurringTransactionsResponse, AxiosError<TErrorAPIV3Res, any>, TUpdateRecurringTransactionsPayload, unknown>;

type TDeleteRecurringTransactionResponse = {
    code: string;
    name: string;
    is_active: boolean;
};
type TDeleteRecurringTransactionPayload = {
    id: string;
    reason: string;
};
type TDeleteRecurringTransactionOptions = Partial<UseMutationOptions<TDeleteRecurringTransactionResponse, AxiosError<TErrorAPIV3Res>, TDeleteRecurringTransactionPayload>>;
declare const useDeleteRecurringTransaction: (options?: TDeleteRecurringTransactionOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteRecurringTransactionResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteRecurringTransactionPayload, unknown>;

type ResError$l = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetReportTemplates: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TReportTemplates>, ResError$l, {
    total: number;
    list: TReportTemplates[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TReportTemplates[];
}, ResError$l>;
declare const useQueryApiV2GetDetailReportTemplates: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$k, ResError$l, TReportTemplates>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TReportTemplates, ResError$l>;
declare const useMutationApiV2GetDetailReportTemplates: (options?: Omit<UseMutationOptions<ResData$k, ResError$l, TReportTemplates>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$k, ResError$l, TReportTemplates, unknown>;
type TReportTemplates = {
    content: string;
    key: string;
    end_point: string;
    name: string;
    type: string;
    id: string;
    created: TModified;
    updated: TModified;
};
type ResData$k = AxiosResponse<TReportTemplates>;

type TUpdateUserSettingsResponse = {
    message: string;
};
type TUpdateUserSettingsPayload = {
    key: string;
    reason: string;
    type: string;
    value: string;
    id: string;
};
type TUpdateUserSettings = Partial<UseMutationOptions<TUpdateUserSettingsResponse, AxiosError<TErrorAPIV3Res>, TUpdateUserSettingsPayload>>;
declare const useUpdateUserSettings: (options?: TUpdateUserSettings) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateUserSettingsResponse, AxiosError<TErrorAPIV3Res, any>, TUpdateUserSettingsPayload, unknown>;

type ResError$k = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV2GetWarehouses: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TWarehouse>, ResError$k, {
    total: number;
    list: TWarehouse[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TWarehouse[];
}, ResError$k>;
declare const useQueryApiV2GetDetailWarehouses: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$j, ResError$k, TWarehouse>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TWarehouse, ResError$k>;
declare const useMutationApiV2GetDetailWarehouses: (options?: Omit<UseMutationOptions<ResData$j, ResError$k, TWarehouse>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$j, ResError$k, TWarehouse, unknown>;
type TWarehouse = {
    id: string;
    code: string;
    name: string;
    is_active: boolean;
    created: TModified;
    updated: TModified;
};
type ResData$j = AxiosResponse<TWarehouse>;

type TPostSession = {
    jwtToken: string;
};
type ResData$i = AxiosResponse<TResPostSession>;
type ResError$j = AxiosError<TErrorAPIV3Res>;
declare function useApiV1PostSession(options?: Omit<UseMutationOptions<ResData$i, ResError$j, TPostSession>, 'mutationFn'>): _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$i, ResError$j, TPostSession, unknown>;
type TResPostSession = {
    id?: string;
    zahir_id?: TZahirID;
    acl?: Record<string, TACL>;
};
type TACL = 'hide' | 'show';
type TZahirID = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    mobile_number?: string;
    telegram_username?: string;
    whatsapp_number?: string;
    client?: TClient;
};
type TClient = {
    name?: string;
    expires_in?: string;
    internal_client?: null;
    developer_account?: TDeveloperAccount;
};
type TDeveloperAccount = {
    id?: number;
    username?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
};

type ResError$i = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetProductionIssues: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TProductionIssues>, ResError$i, {
    total: number;
    list: TProductionIssues[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TProductionIssues[];
}, ResError$i>;
declare const useQueryApiV2GetDetailProductionIssues: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$h, ResError$i, TProductionIssues>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TProductionIssues, ResError$i>;
type TProductionIssues = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$h = AxiosResponse<TProductionIssues>;

type TCreateProductionIssuesResponse = {
    message: string;
};
type TCreateProductionIssuesPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TCreateProductionIssuesOptions = Partial<UseMutationOptions<TCreateProductionIssuesResponse, AxiosError<TErrorAPIV3Res>, TCreateProductionIssuesPayload>>;
declare const useCreateProductionIssues: (options?: TCreateProductionIssuesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateProductionIssuesResponse, AxiosError<TErrorAPIV3Res, any>, TCreateProductionIssuesPayload, unknown>;

type TUpdateProductionIssuesPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateProductionIssuesResponse = TUpdateProductionIssuesPayload;
type TUpdateProductionIssuesOptions = Partial<UseMutationOptions<TUpdateProductionIssuesResponse, AxiosError<TErrorAPIV3Res>, TUpdateProductionIssuesPayload>>;
declare const useUpdateProductionIssues: (options?: TUpdateProductionIssuesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateProductionIssuesPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateProductionIssuesPayload, unknown>;

type TDeleteProductionIssuesResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteProductionIssuesPayload = {
    id: string;
    reason: string;
};
type TDeleteProductionIssuesOptions = Partial<UseMutationOptions<TDeleteProductionIssuesResponse, AxiosError<TErrorAPIV3Res>, TDeleteProductionIssuesPayload>>;
declare const deleteProductionIssues: (options?: TDeleteProductionIssuesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteProductionIssuesResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteProductionIssuesPayload, unknown>;

type ResError$h = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetPlants: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TPlants>, ResError$h, {
    total: number;
    list: TPlants[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TPlants[];
}, ResError$h>;
declare const useQueryApiV1GetDetailPlants: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$g, ResError$h, TPlants>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TPlants, ResError$h>;
type TPlants = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$g = AxiosResponse<TPlants>;

type TCreatePlantsResponse = {
    message: string;
};
type TCreatePlantsPayload = TPlantsForm;
type TCreatePlantsOptions = Partial<UseMutationOptions<TCreatePlantsResponse, AxiosError<TErrorAPIV3Res>, TCreatePlantsPayload>>;
declare const useCreatePlants: (options?: TCreatePlantsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreatePlantsResponse, AxiosError<TErrorAPIV3Res, any>, {
    description?: string | undefined;
    address?: string | undefined;
    name: string;
    code: string;
    is_active: boolean;
}, unknown>;

type TUpdatePlantsPayload = TPlantsForm & {
    id: string;
};
type TUpdatePlantsResponse = TUpdatePlantsPayload;
type TUpdatePlantsOptions = Partial<UseMutationOptions<TUpdatePlantsResponse, AxiosError<TErrorAPIV3Res>, TUpdatePlantsPayload>>;
declare const useUpdatePlants: (options?: TUpdatePlantsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdatePlantsPayload, AxiosError<TErrorAPIV3Res, any>, TUpdatePlantsPayload, unknown>;

type TDeletePlantsResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeletePlantsPayload = {
    id: string;
    reason: string;
};
type TDeletePlantsOptions = Partial<UseMutationOptions<TDeletePlantsResponse, AxiosError<TErrorAPIV3Res>, TDeletePlantsPayload>>;
declare const deletePlants: (options?: TDeletePlantsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeletePlantsResponse, AxiosError<TErrorAPIV3Res, any>, TDeletePlantsPayload, unknown>;

type ResError$g = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetMachine: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TMachine>, ResError$g, {
    total: number;
    list: TMachine[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TMachine[];
}, ResError$g>;
declare const useQueryApiV1GetDetailMachine: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$f, ResError$g, TMachine>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TMachine, ResError$g>;
type TMachine = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$f = AxiosResponse<TMachine>;

type TCreateMachineResponse = {
    message: string;
};
type TCreateMachinePayload = TMachineForm;
type TCreateMachineOptions = Partial<UseMutationOptions<TCreateMachineResponse, AxiosError<TErrorAPIV3Res>, TCreateMachinePayload>>;
declare const useCreateMachine: (options?: TCreateMachineOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateMachineResponse, AxiosError<TErrorAPIV3Res, any>, {
    type?: string | undefined;
    description?: string | undefined;
    name: string;
    code: string;
    is_active: boolean;
    line_speed: number;
}, unknown>;

type TUpdateMachinePayload = TMachineForm & {
    id: string;
};
type TUpdateMachineResponse = TUpdateMachinePayload;
type TUpdateMachineOptions = Partial<UseMutationOptions<TUpdateMachineResponse, AxiosError<TErrorAPIV3Res>, TUpdateMachinePayload>>;
declare const useUpdateMachine: (options?: TUpdateMachineOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateMachinePayload, AxiosError<TErrorAPIV3Res, any>, TUpdateMachinePayload, unknown>;

type TDeleteMachineResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteMachinePayload = {
    id: string;
    reason: string;
};
type TDeleteMachineOptions = Partial<UseMutationOptions<TDeleteMachineResponse, AxiosError<TErrorAPIV3Res>, TDeleteMachinePayload>>;
declare const deleteMachine: (options?: TDeleteMachineOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteMachineResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteMachinePayload, unknown>;

type ResError$f = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetLineProductions: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TLineProductions>, ResError$f, {
    total: number;
    list: TLineProductions[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TLineProductions[];
}, ResError$f>;
declare const useQueryApiV2GetDetailLineProductions: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$e, ResError$f, TLineProductions>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TLineProductions, ResError$f>;
type TLineProductions = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$e = AxiosResponse<TLineProductions>;

type TCreateLineProductionsResponse = {
    message: string;
};
type TCreateLineProductionsPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TCreateLineProductionsOptions = Partial<UseMutationOptions<TCreateLineProductionsResponse, AxiosError<TErrorAPIV3Res>, TCreateLineProductionsPayload>>;
declare const useCreateLineProductions: (options?: TCreateLineProductionsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateLineProductionsResponse, AxiosError<TErrorAPIV3Res, any>, TCreateLineProductionsPayload, unknown>;

type TUpdateLineProductionsPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateLineProductionsResponse = TUpdateLineProductionsPayload;
type TUpdateLineProductionsOptions = Partial<UseMutationOptions<TUpdateLineProductionsResponse, AxiosError<TErrorAPIV3Res>, TUpdateLineProductionsPayload>>;
declare const useUpdateLineProductions: (options?: TUpdateLineProductionsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateLineProductionsPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateLineProductionsPayload, unknown>;

type TDeleteLineProductionsResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteLineProductionsPayload = {
    id: string;
    reason: string;
};
type TDeleteLineProductionsOptions = Partial<UseMutationOptions<TDeleteLineProductionsResponse, AxiosError<TErrorAPIV3Res>, TDeleteLineProductionsPayload>>;
declare const deleteLineProductions: (options?: TDeleteLineProductionsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteLineProductionsResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteLineProductionsPayload, unknown>;

type ResError$e = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetProductionPhase: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TProductionPhase>, ResError$e, {
    total: number;
    list: TProductionPhase[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TProductionPhase[];
}, ResError$e>;
declare const useQueryApiV1GetDetailProductionPhase: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$d, ResError$e, TProductionPhase>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TProductionPhase, ResError$e>;
type TProductionPhase = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$d = AxiosResponse<TProductionPhase>;

type TCreateProductionPhaseResponse = {
    message: string;
};
type TCreateProductionPhasePayload = TProductionPhaseForm;
type TCreateProductionPhaseOptions = Partial<UseMutationOptions<TCreateProductionPhaseResponse, AxiosError<TErrorAPIV3Res>, TCreateProductionPhasePayload>>;
declare const useCreateProductionPhase: (options?: TCreateProductionPhaseOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateProductionPhaseResponse, AxiosError<TErrorAPIV3Res, any>, {
    description?: string | undefined;
    machines?: {
        name: string;
        code: string;
    }[] | undefined;
    substages?: {
        name?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
        unit: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    is_packing: boolean;
    quality_check_items: {
        name?: string | undefined;
    }[];
    color: string;
}, unknown>;

type TUpdateProductionPhasePayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateProductionPhaseResponse = TUpdateProductionPhasePayload;
type TUpdateProductionPhaseOptions = Partial<UseMutationOptions<TUpdateProductionPhaseResponse, AxiosError<TErrorAPIV3Res>, TUpdateProductionPhasePayload>>;
declare const useUpdateProductionPhase: (options?: TUpdateProductionPhaseOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateProductionPhasePayload, AxiosError<TErrorAPIV3Res, any>, TUpdateProductionPhasePayload, unknown>;

type TDeleteProductionPhaseResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteProductionPhasePayload = {
    id: string;
    reason: string;
};
type TDeleteProductionPhaseOptions = Partial<UseMutationOptions<TDeleteProductionPhaseResponse, AxiosError<TErrorAPIV3Res>, TDeleteProductionPhasePayload>>;
declare const deleteProductionPhase: (options?: TDeleteProductionPhaseOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteProductionPhaseResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteProductionPhasePayload, unknown>;

type ResError$d = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetProductionCategories: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TProductionCategories>, ResError$d, {
    total: number;
    list: TProductionCategories[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TProductionCategories[];
}, ResError$d>;
declare const useQueryApiV2GetDetailProductionCategories: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$c, ResError$d, TProductionCategories>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TProductionCategories, ResError$d>;
type TProductionCategories = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$c = AxiosResponse<TProductionCategories>;

type TCreateProductionCategoriesResponse = {
    message: string;
};
type TCreateProductionCategoriesPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TCreateProductionCategoriesOptions = Partial<UseMutationOptions<TCreateProductionCategoriesResponse, AxiosError<TErrorAPIV3Res>, TCreateProductionCategoriesPayload>>;
declare const useCreateProductionCategories: (options?: TCreateProductionCategoriesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateProductionCategoriesResponse, AxiosError<TErrorAPIV3Res, any>, TCreateProductionCategoriesPayload, unknown>;

type TUpdateProductionCategoriesPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateProductionCategoriesResponse = TUpdateProductionCategoriesPayload;
type TUpdateProductionCategoriesOptions = Partial<UseMutationOptions<TUpdateProductionCategoriesResponse, AxiosError<TErrorAPIV3Res>, TUpdateProductionCategoriesPayload>>;
declare const useUpdateProductionCategories: (options?: TUpdateProductionCategoriesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateProductionCategoriesPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateProductionCategoriesPayload, unknown>;

type TDeleteProductionCategoriesResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteProductionCategoriesPayload = {
    id: string;
    reason: string;
};
type TDeleteProductionCategoriesOptions = Partial<UseMutationOptions<TDeleteProductionCategoriesResponse, AxiosError<TErrorAPIV3Res>, TDeleteProductionCategoriesPayload>>;
declare const deleteProductionCategories: (options?: TDeleteProductionCategoriesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteProductionCategoriesResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteProductionCategoriesPayload, unknown>;

type ResError$c = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetLabours: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TLabours>, ResError$c, {
    total: number;
    list: TLabours[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TLabours[];
}, ResError$c>;
declare const useQueryApiV1GetDetailLabours: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$b, ResError$c, TLabours>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TLabours, ResError$c>;
type TLabours = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$b = AxiosResponse<TLabours>;

type TCreateLaboursResponse = {
    message: string;
};
type TCreateLaboursPayload = TLaboursForm;
type TCreateLaboursOptions = Partial<UseMutationOptions<TCreateLaboursResponse, AxiosError<TErrorAPIV3Res>, TCreateLaboursPayload>>;
declare const useCreateLabours: (options?: TCreateLaboursOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateLaboursResponse, AxiosError<TErrorAPIV3Res, any>, {
    description?: string | undefined;
    role?: {} | undefined;
    schedule?: {} | undefined;
    name: string;
    code: string;
    is_active: boolean;
}, unknown>;

type TUpdateLaboursPayload = TLaboursForm & {
    id: string;
};
type TUpdateLaboursResponse = TUpdateLaboursPayload;
type TUpdateLaboursOptions = Partial<UseMutationOptions<TUpdateLaboursResponse, AxiosError<TErrorAPIV3Res>, TUpdateLaboursPayload>>;
declare const useUpdateLabours: (options?: TUpdateLaboursOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateLaboursPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateLaboursPayload, unknown>;

type TDeleteLaboursResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteLaboursPayload = {
    id: string;
    reason: string;
};
type TDeleteLaboursOptions = Partial<UseMutationOptions<TDeleteLaboursResponse, AxiosError<TErrorAPIV3Res>, TDeleteLaboursPayload>>;
declare const deleteLabours: (options?: TDeleteLaboursOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteLaboursResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteLaboursPayload, unknown>;

type ResError$b = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetOperatorSchedule: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TOperatorSchedule>, ResError$b, {
    total: number;
    list: TOperatorSchedule[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TOperatorSchedule[];
}, ResError$b>;
declare const useQueryApiV2GetDetailOperatorSchedule: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$a, ResError$b, TOperatorSchedule>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TOperatorSchedule, ResError$b>;
type TOperatorSchedule = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$a = AxiosResponse<TOperatorSchedule>;

type TCreateOperatorScheduleResponse = {
    message: string;
};
type TCreateOperatorSchedulePayload = unknown;
type TCreateOperatorScheduleOptions = Partial<UseMutationOptions<TCreateOperatorScheduleResponse, AxiosError<TErrorAPIV3Res>, TCreateOperatorSchedulePayload>>;
declare const useCreateOperatorSchedule: (options?: TCreateOperatorScheduleOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateOperatorScheduleResponse, AxiosError<TErrorAPIV3Res, any>, unknown, unknown>;

type TUpdateOperatorSchedulePayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateOperatorScheduleResponse = TUpdateOperatorSchedulePayload;
type TUpdateOperatorScheduleOptions = Partial<UseMutationOptions<TUpdateOperatorScheduleResponse, AxiosError<TErrorAPIV3Res>, TUpdateOperatorSchedulePayload>>;
declare const useUpdateOperatorSchedule: (options?: TUpdateOperatorScheduleOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateOperatorSchedulePayload, AxiosError<TErrorAPIV3Res, any>, TUpdateOperatorSchedulePayload, unknown>;

type TDeleteOperatorScheduleResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteOperatorSchedulePayload = {
    id: string;
    reason: string;
};
type TDeleteOperatorScheduleOptions = Partial<UseMutationOptions<TDeleteOperatorScheduleResponse, AxiosError<TErrorAPIV3Res>, TDeleteOperatorSchedulePayload>>;
declare const deleteOperatorSchedule: (options?: TDeleteOperatorScheduleOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteOperatorScheduleResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteOperatorSchedulePayload, unknown>;

type ResError$a = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetJobRole: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TJobRole>, ResError$a, {
    total: number;
    list: TJobRole[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TJobRole[];
}, ResError$a>;
declare const useQueryApiV2GetDetailJobRole: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$9, ResError$a, TJobRole>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TJobRole, ResError$a>;
type TJobRole = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$9 = AxiosResponse<TJobRole>;

type TCreateJobRoleResponse = {
    message: string;
};
type TCreateJobRolePayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TCreateJobRoleOptions = Partial<UseMutationOptions<TCreateJobRoleResponse, AxiosError<TErrorAPIV3Res>, TCreateJobRolePayload>>;
declare const useCreateJobRole: (options?: TCreateJobRoleOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateJobRoleResponse, AxiosError<TErrorAPIV3Res, any>, TCreateJobRolePayload, unknown>;

type TUpdateJobRolePayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateJobRoleResponse = TUpdateJobRolePayload;
type TUpdateJobRoleOptions = Partial<UseMutationOptions<TUpdateJobRoleResponse, AxiosError<TErrorAPIV3Res>, TUpdateJobRolePayload>>;
declare const useUpdateJobRole: (options?: TUpdateJobRoleOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateJobRolePayload, AxiosError<TErrorAPIV3Res, any>, TUpdateJobRolePayload, unknown>;

type TDeleteJobRoleResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteJobRolePayload = {
    id: string;
    reason: string;
};
type TDeleteJobRoleOptions = Partial<UseMutationOptions<TDeleteJobRoleResponse, AxiosError<TErrorAPIV3Res>, TDeleteJobRolePayload>>;
declare const deleteJobRole: (options?: TDeleteJobRoleOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteJobRoleResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteJobRolePayload, unknown>;

type ResError$9 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetSchedules: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TSchedules>, ResError$9, {
    total: number;
    list: TSchedules[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TSchedules[];
}, ResError$9>;
declare const useQueryApiV2GetDetailSchedules: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$8, ResError$9, TSchedules>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TSchedules, ResError$9>;
type TSchedules = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$8 = AxiosResponse<TSchedules>;

type TCreateSchedulesResponse = {
    message: string;
};
type TCreateSchedulesPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TCreateSchedulesOptions = Partial<UseMutationOptions<TCreateSchedulesResponse, AxiosError<TErrorAPIV3Res>, TCreateSchedulesPayload>>;
declare const useCreateSchedules: (options?: TCreateSchedulesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateSchedulesResponse, AxiosError<TErrorAPIV3Res, any>, TCreateSchedulesPayload, unknown>;

type TUpdateSchedulesPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateSchedulesResponse = TUpdateSchedulesPayload;
type TUpdateSchedulesOptions = Partial<UseMutationOptions<TUpdateSchedulesResponse, AxiosError<TErrorAPIV3Res>, TUpdateSchedulesPayload>>;
declare const useUpdateSchedules: (options?: TUpdateSchedulesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateSchedulesPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateSchedulesPayload, unknown>;

type TDeleteSchedulesResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteSchedulesPayload = {
    id: string;
    reason: string;
};
type TDeleteSchedulesOptions = Partial<UseMutationOptions<TDeleteSchedulesResponse, AxiosError<TErrorAPIV3Res>, TDeleteSchedulesPayload>>;
declare const deleteSchedules: (options?: TDeleteSchedulesOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteSchedulesResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteSchedulesPayload, unknown>;

type ResError$8 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetStandardCost: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TStandardCost>, ResError$8, {
    total: number;
    list: TStandardCost[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TStandardCost[];
}, ResError$8>;
declare const useQueryApiV2GetDetailStandardCost: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$7, ResError$8, TStandardCost>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TStandardCost, ResError$8>;
type TStandardCost = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$7 = AxiosResponse<TStandardCost>;

type TCreateStandardCostResponse = {
    message: string;
};
type TCreateStandardCostPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TCreateStandardCostOptions = Partial<UseMutationOptions<TCreateStandardCostResponse, AxiosError<TErrorAPIV3Res>, TCreateStandardCostPayload>>;
declare const useCreateStandardCost: (options?: TCreateStandardCostOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateStandardCostResponse, AxiosError<TErrorAPIV3Res, any>, TCreateStandardCostPayload, unknown>;

type TUpdateStandardCostPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateStandardCostResponse = TUpdateStandardCostPayload;
type TUpdateStandardCostOptions = Partial<UseMutationOptions<TUpdateStandardCostResponse, AxiosError<TErrorAPIV3Res>, TUpdateStandardCostPayload>>;
declare const useUpdateStandardCost: (options?: TUpdateStandardCostOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateStandardCostPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateStandardCostPayload, unknown>;

type TDeleteStandardCostResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteStandardCostPayload = {
    id: string;
    reason: string;
};
type TDeleteStandardCostOptions = Partial<UseMutationOptions<TDeleteStandardCostResponse, AxiosError<TErrorAPIV3Res>, TDeleteStandardCostPayload>>;
declare const useDeleteStandardCost: (options?: TDeleteStandardCostOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteStandardCostResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteStandardCostPayload, unknown>;

type ResError$7 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetBillOfMaterials: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TBillOfMaterials>, ResError$7, {
    total: number;
    list: TBillOfMaterials[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TBillOfMaterials[];
}, ResError$7>;
declare const useQueryApiV2GetDetailBillOfMaterials: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$6, ResError$7, TBillOfMaterials>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TBillOfMaterials, ResError$7>;
type TBillOfMaterials = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$6 = AxiosResponse<TBillOfMaterials>;

type TCreateBillOfMaterialsResponse = {
    message: string;
};
type TCreateBillOfMaterialsPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TCreateBillOfMaterialsOptions = Partial<UseMutationOptions<TCreateBillOfMaterialsResponse, AxiosError<TErrorAPIV3Res>, TCreateBillOfMaterialsPayload>>;
declare const useCreateBillOfMaterials: (options?: TCreateBillOfMaterialsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateBillOfMaterialsResponse, AxiosError<TErrorAPIV3Res, any>, TCreateBillOfMaterialsPayload, unknown>;

type TUpdateBillOfMaterialsPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateBillOfMaterialsResponse = TUpdateBillOfMaterialsPayload;
type TUpdateBillOfMaterialsOptions = Partial<UseMutationOptions<TUpdateBillOfMaterialsResponse, AxiosError<TErrorAPIV3Res>, TUpdateBillOfMaterialsPayload>>;
declare const useUpdateBillOfMaterials: (options?: TUpdateBillOfMaterialsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateBillOfMaterialsPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateBillOfMaterialsPayload, unknown>;

type TDeleteBillOfMaterialsResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteBillOfMaterialsPayload = {
    id: string;
    reason: string;
};
type TDeleteBillOfMaterialsOptions = Partial<UseMutationOptions<TDeleteBillOfMaterialsResponse, AxiosError<TErrorAPIV3Res>, TDeleteBillOfMaterialsPayload>>;
declare const deleteBillOfMaterials: (options?: TDeleteBillOfMaterialsOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteBillOfMaterialsResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteBillOfMaterialsPayload, unknown>;

type ResError$6 = AxiosError<TErrorAPIV3Res>;
type BillMaterialPhasesResponse = TResPagination<{
    id: string;
    bom_id: string;
    number: string;
    phase: {
        id: string;
        code: string;
        name: string;
        description: string;
        is_active: boolean;
        is_sub_stages: boolean;
    };
    formula: {
        id: string;
        code: string;
        name: string;
        estimation: {
            line_speed: number;
            quantity: number;
            time: number;
        };
    };
    proportion: number;
}>;
declare const useMutationApiV1GetBillMaterialPhases: (options?: Omit<UseMutationOptions<AxiosResponse<BillMaterialPhasesResponse>, ResError$6, Record<string, unknown>>, 'mutationFn' | 'mutationKey'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<AxiosResponse<BillMaterialPhasesResponse, any, {}>, ResError$6, Record<string, unknown>, unknown>;
declare const useQueryApiV1GetBillMaterialPhases: (params: Record<string, unknown>, options?: Omit<UseQueryOptions<AxiosResponse<BillMaterialPhasesResponse>, ResError$6, BillMaterialPhasesResponse>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<BillMaterialPhasesResponse, ResError$6>;

type ResError$5 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetFormulas: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TFormulas>, ResError$5, {
    total: number;
    list: TFormulas[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TFormulas[];
}, ResError$5>;
declare const useQueryApiV2GetDetailFormulas: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$5, ResError$5, TFormulas>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TFormulas, ResError$5>;
type TFormulas = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$5 = AxiosResponse<TFormulas>;

type TCreateFormulaResponse = {
    message: string;
};
type TCreateFormulaPayload = TFormulaForm;
type TCreateFormulaOptions = Partial<UseMutationOptions<TCreateFormulaResponse, AxiosError<TErrorAPIV3Res>, TCreateFormulaPayload>>;
declare const useCreateFormulas: (options?: TCreateFormulaOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateFormulaResponse, AxiosError<TErrorAPIV3Res, any>, {
    description?: string | undefined;
    raw_materials?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        formula?: string | undefined;
        material?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        formula_labels?: {
            value?: string | undefined;
            label?: string | undefined;
        }[] | undefined;
        is_raw_material: boolean;
    }[] | undefined;
    scraps?: {
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity?: number | undefined;
        scrap?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
    }[] | undefined;
    name: string;
    code: string;
    is_active: boolean;
    phase: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
    };
    estimation: {
        line_speed?: number | undefined;
        time?: number | undefined;
        quantity: number;
        machine: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        };
    };
    finish_good: {
        name?: string | undefined;
        id?: string | undefined;
        code?: string | undefined;
        unit?: {
            name?: string | undefined;
            id?: string | undefined;
            code?: string | undefined;
        } | undefined;
        quantity: number;
    };
}, unknown>;

type TUpdateFormulasPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateFormulasResponse = TUpdateFormulasPayload;
type TUpdateFormulasOptions = Partial<UseMutationOptions<TUpdateFormulasResponse, AxiosError<TErrorAPIV3Res>, TUpdateFormulasPayload>>;
declare const useUpdateFormulas: (options?: TUpdateFormulasOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateFormulasPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateFormulasPayload, unknown>;

type TDeleteFormulasResponse = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
};
type TDeleteFormulasPayload = {
    id: string;
    reason: string;
};
type TDeleteFormulasOptions = Partial<UseMutationOptions<TDeleteFormulasResponse, AxiosError<TErrorAPIV3Res>, TDeleteFormulasPayload>>;
declare const deleteFormulas: (options?: TDeleteFormulasOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteFormulasResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteFormulasPayload, unknown>;

type ResError$4 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetProductionPlans: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TProductionPlans>, ResError$4, {
    total: number;
    list: TProductionPlans[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TProductionPlans[];
}, ResError$4>;
declare const useQueryApiV1GetDetailProductionPlans: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$4, ResError$4, TProductionPlans>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TProductionPlans, ResError$4>;
declare const useMutationApiV1GetDefaultProductionPlans: (options?: Omit<UseMutationOptions<AxiosResponse<{
    next_reference_number: string;
}>, ResError$4>, 'mutationFn' | 'mutationKey'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<AxiosResponse<{
    next_reference_number: string;
}, any, {}>, ResError$4, void, unknown>;
type TProductionPlans = {
    id: string;
    created: {
        time: string;
        user: {
            email: string | null;
            id: string | null;
            name: string | null;
        };
    };
    date: string;
    deleted: {
        time: string | null;
        user: {
            email: string | null;
            id: string | null;
            name: string | null;
        };
    };
    description: string;
    due_date: string;
    finish_date: {
        estimation: string;
        realization: string | null;
    };
    finish_goods: {
        bom: {
            code: string;
            description: string;
            id: string;
            name: string;
        };
        customer: {
            code: string;
            id: string;
            name: string;
        };
        id: string;
        note: {
            content: string | null;
            id: string | null;
        };
        number: number;
        parent: {
            item: {
                id: string | null;
                line_number: number | null;
            };
            order: {
                id: string | null;
                number: string | null;
            };
        };
        plan: {
            date: string;
            description: string;
            id: string;
            number: string;
        };
        product: {
            code: string;
            description: string | null;
            id: string;
            name: string;
            unit: {
                code: string;
                id: string;
                name: string;
            };
        };
        quantity: number;
        unit: {
            code: string;
            id: string;
            name: string;
        };
    }[];
    is_internal: boolean;
    number: string;
    orders: {
        id: string;
        order: {
            customer: {
                code: string | null;
                id: string | null;
                name: string | null;
            };
            date: string | null;
            description: string | null;
            id: string | null;
            number: string | null;
            status: string | null;
            type: string | null;
        };
        plan_id: string;
    }[];
    plant: {
        address: string;
        code: string;
        description: string;
        id: string;
        is_active: boolean;
        name: string;
    };
    start_date: string | null;
    updated: {
        time: string;
        user: {
            email: string | null;
            id: string | null;
            name: string | null;
        };
    };
};
type ResData$4 = AxiosResponse<TProductionPlans>;

type TCreateProductionPlansResponse = {
    message: string;
};
type TCreateProductionPlansPayload = TProductionPlansForm;
type TCreateProductionPlansOptions = Partial<UseMutationOptions<TCreateProductionPlansResponse, AxiosError<TErrorAPIV3Res>, TCreateProductionPlansPayload>>;
declare const useCreateProductionPlans: (options?: TCreateProductionPlansOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateProductionPlansResponse, AxiosError<TErrorAPIV3Res, any>, {
    description?: string | undefined;
    orders?: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    }[] | undefined;
    due_date?: string | null | undefined;
    number: string;
    is_active: boolean;
    date: string;
    customer: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    is_internal: boolean;
    start_date: string;
    finish_date: {
        estimation: string;
    };
    plant: {
        name?: string | null | undefined;
        id?: string | null | undefined;
        code?: string | null | undefined;
    };
    finish_goods: {
        note?: {
            content?: string | null | undefined;
        } | null | undefined;
        order_id?: string | undefined;
        number: number;
        description: string;
        unit: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        quantity: number;
        product: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        bom: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        customer: {
            name?: string | null | undefined;
            id?: string | null | undefined;
            code?: string | null | undefined;
        };
        is_expanded: boolean;
    }[];
}, unknown>;

type TUpdateProductionPlansPayload = {
    code: string;
    name: string;
    is_active: boolean;
    description?: string;
    id: string;
};
type TUpdateProductionPlansResponse = TUpdateProductionPlansPayload;
type TUpdateProductionPlansOptions = Partial<UseMutationOptions<TUpdateProductionPlansResponse, AxiosError<TErrorAPIV3Res>, TUpdateProductionPlansPayload>>;
declare const useUpdateProductionPlans: (options?: TUpdateProductionPlansOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateProductionPlansPayload, AxiosError<TErrorAPIV3Res, any>, TUpdateProductionPlansPayload, unknown>;

type TDeleteProductionPlansPayload = {
    id: string | string[];
    reason: string;
};
type TDeleteProductionPlansOptions = Partial<UseMutationOptions<void, AxiosError<TErrorAPIV3Res>, TDeleteProductionPlansPayload>>;
declare const deleteProductionPlans: (options?: TDeleteProductionPlansOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<void, AxiosError<TErrorAPIV3Res, any>, TDeleteProductionPlansPayload, unknown>;

type ResError$3 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetWorkOrders: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TWorkOrders>, ResError$3, {
    total: number;
    list: TWorkOrders[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TWorkOrders[];
}, ResError$3>;
declare const useQueryApiV1GetDetailWorkOrderPhase: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$3, ResError$3, TWorkOrders>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TWorkOrders, ResError$3>;
declare const useQueryApiV2GetDetailWorkOrders: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$3, ResError$3, TWorkOrders>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TWorkOrders, ResError$3>;
type TWorkOrders = {
    id?: string;
    code?: string;
    name?: string;
    is_active?: boolean;
};
type ResData$3 = AxiosResponse<TWorkOrders>;

type ResError$2 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetReportTemplates: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TReportTemplateV1>, ResError$2, {
    total: number;
    list: TReportTemplateV1[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TReportTemplateV1[];
}, ResError$2>;
declare const useQueryApiV1GetDetailReportTemplates: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$2, ResError$2, TReportTemplateV1>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TReportTemplateV1, ResError$2>;
declare const useMutationApiV1GetDetailReportTemplates: (options?: Omit<UseMutationOptions<ResData$2, ResError$2, TReportTemplateV1>, 'mutationFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData$2, ResError$2, TReportTemplateV1, unknown>;
type TReportTemplateV1 = {
    content: string;
    key: string;
    end_point: string;
    name: string;
    type: string;
    id: string;
    created: TModified;
    updated: TModified;
};
type ResData$2 = AxiosResponse<TReportTemplateV1>;

type TCreateReportTemplateResponse = {
    message: string;
};
type TCreateReportTemplatePayload = TReportTemplateForm & {
    type: string;
    data: Record<string, unknown>;
};
type TCreateReportTemplateOptions = Partial<UseMutationOptions<TCreateReportTemplateResponse, AxiosError<TErrorAPIV3Res>, TCreateReportTemplatePayload>>;
declare const useCreateReportTemplate: (options?: TCreateReportTemplateOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateReportTemplateResponse, AxiosError<TErrorAPIV3Res, any>, TCreateReportTemplatePayload, unknown>;

type TUpdateReportTemplateResponse = {
    message: string;
};
type TUpdateReportTemplatePayload = TReportTemplateForm & {
    type: string;
    data: Record<string, unknown>;
    id: string;
};
type TUpdateReportTemplateOptions = Partial<UseMutationOptions<TUpdateReportTemplateResponse, AxiosError<TErrorAPIV3Res>, TUpdateReportTemplatePayload>>;
declare const useUpdateReportTemplate: (options?: TUpdateReportTemplateOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateReportTemplateResponse, AxiosError<TErrorAPIV3Res, any>, TUpdateReportTemplatePayload, unknown>;

type TDeleteReportTemplateResponse = {
    code: string;
    name: string;
    is_active: boolean;
};
type TDeleteReportTemplatePayload = {
    id: string;
    reason: string;
};
type TDeleteReportTemplateOptions = Partial<UseMutationOptions<TDeleteReportTemplateResponse, AxiosError<TErrorAPIV3Res>, TDeleteReportTemplatePayload>>;
declare const useDeleteReportTemplate: (options?: TDeleteReportTemplateOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteReportTemplateResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteReportTemplatePayload, unknown>;

type ResError$1 = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetWorkOrderPhases: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TWorkOrderPhases>, ResError$1, {
    total: number;
    list: TWorkOrderPhases[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TWorkOrderPhases[];
}, ResError$1>;
declare const useQueryApiV1GetDetailWorkOrderPhases: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$1, ResError$1, TWorkOrderPhases>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TWorkOrderPhases, ResError$1>;
declare const useQueryApiV2GetDetailWorkOrderPhases: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData$1, ResError$1, TWorkOrderPhases>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TWorkOrderPhases, ResError$1>;
type TWorkOrderPhases = {
    bom_phase: {
        formula: {
            code: string;
            id: string;
            name: string;
        };
        id: string;
        phase: {
            code: string;
            description: string;
            id: string;
            is_active: boolean;
            is_grup_by_id: boolean;
            is_sub_stages: boolean;
            is_use_base_unit: boolean;
            name: string;
            number: number;
            substages: string;
        };
    };
    estimation: {
        finish_date: string;
        start_date: string;
        time: number;
    };
    id: string;
    is_group_by_id: boolean;
    is_use_base_unit: boolean;
    machine: {
        code: string;
        id: string;
        is_active: boolean;
        line_speed: number | null;
        name: string;
        type: string;
    };
    machine_speed: number;
    note: {
        content: string | null;
        id: string | null;
    };
    number: number;
    product: {
        code: string;
        id: string;
        name: string;
        unit: {
            code: string;
            id: string;
            name: string;
        };
    };
    progress: number;
    quantity: number;
    realization: {
        finish_date: string;
        quantity: number | null;
        start_date: string;
        time: number;
    };
    status: string;
    unit: {
        code: string | null;
        id: string | null;
        name: string | null;
    };
    work_order: {
        id: string;
    };
};
type ResData$1 = AxiosResponse<TWorkOrderPhases>;

type TUpdateWorkOrderPhasePayload = Record<string, unknown> & {
    id: string;
};
type TUpdateWorkOrderPhaseResponse = TUpdateWorkOrderPhasePayload;
type TUpdateWorkOrderPhaseOptions = Partial<UseMutationOptions<TUpdateWorkOrderPhaseResponse, AxiosError<TErrorAPIV3Res>, TUpdateWorkOrderPhasePayload>>;
declare const useUpdateWorkOrderPhase: (options?: TUpdateWorkOrderPhaseOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateWorkOrderPhasePayload, AxiosError<TErrorAPIV3Res, any>, TUpdateWorkOrderPhasePayload, unknown>;

type ResError = AxiosError<TErrorAPIV3Res>;
declare const useInfiniteQueryApiV1GetWorkOrderProgress: (params: Record<string, unknown>, options?: Partial<UndefinedInitialDataInfiniteOptions<TResPagination<TWorkOrderProgress>, ResError, {
    total: number;
    list: TWorkOrderProgress[];
}, [
    string,
    Record<string, unknown>
], number>>) => _tanstack_react_query_build_legacy_types.UseInfiniteQueryResult<{
    total: number;
    list: TWorkOrderProgress[];
}, ResError>;
declare const useQueryApiV1GetDetailWorkOrderProgress: (params: {
    id: string;
}, options?: Omit<UseQueryOptions<ResData, ResError, TWorkOrderProgress>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseQueryResult<TWorkOrderProgress, ResError>;
declare const useMutationApiV1GetDetailWorkOrderProgress: (options?: Omit<UseMutationOptions<ResData, ResError, {
    id: string;
}>, 'queryFn'>) => _tanstack_react_query_build_legacy_types.UseMutationResult<ResData, ResError, {
    id: string;
}, unknown>;
type TWorkOrderProgress = Record<string, unknown>;
type ResData = AxiosResponse<TWorkOrderProgress>;

type TCreateWorkOrderPhaseProgressResponse = Record<string, unknown>;
type TCreateWorkOrderPhaseProgressPayload = Record<string, unknown>;
type TCreateWorkOrderPhaseProgressOptions = Partial<UseMutationOptions<TCreateWorkOrderPhaseProgressResponse, AxiosError<TErrorAPIV3Res>, TCreateWorkOrderPhaseProgressPayload>>;
declare const useCreateWorkOrderPhaseProgress: (options?: TCreateWorkOrderPhaseProgressOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TCreateWorkOrderPhaseProgressResponse, AxiosError<TErrorAPIV3Res, any>, TCreateWorkOrderPhaseProgressPayload, unknown>;

type TUpdateWorkOrderPhaseProgressResponse = Record<string, unknown>;
type TUpdateWorkOrderPhaseProgressPayload = {
    id: string;
} & Record<string, unknown>;
type TUpdateWorkOrderPhaseProgressOptions = Partial<UseMutationOptions<TUpdateWorkOrderPhaseProgressResponse, AxiosError<TErrorAPIV3Res>, TUpdateWorkOrderPhaseProgressPayload>>;
declare const useUpdateWorkOrderPhaseProgress: (options?: TUpdateWorkOrderPhaseProgressOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TUpdateWorkOrderPhaseProgressResponse, AxiosError<TErrorAPIV3Res, any>, TUpdateWorkOrderPhaseProgressPayload, unknown>;

type TDeleteWorkOrderPhaseProgressResponse = Record<string, unknown>;
type TDeleteWorkOrderPhaseProgressPayload = {
    id: string;
    reason: string;
};
type TDeleteWorkOrderPhaseProgressOptions = Partial<UseMutationOptions<TDeleteWorkOrderPhaseProgressResponse, AxiosError<TErrorAPIV3Res>, TDeleteWorkOrderPhaseProgressPayload>>;
declare const useDeleteWorkOrderPhaseProgress: (options?: TDeleteWorkOrderPhaseProgressOptions) => _tanstack_react_query_build_legacy_types.UseMutationResult<TDeleteWorkOrderPhaseProgressResponse, AxiosError<TErrorAPIV3Res, any>, TDeleteWorkOrderPhaseProgressPayload, unknown>;

declare const instanceAxios: axios.AxiosInstance;
declare const setDefaultHeaders: (headers: {
    key: string;
    value: string;
}[]) => void;

declare function useDebounce(value: unknown, delay: number): unknown;

declare const multiPrice: ({ line_item, term_of_payments, customer, department, currency, }: TTotalPerLineItem) => {
    unit_price: number | undefined;
    is_multi_price: boolean;
};
declare const totalPerLineItem: ({ line_item, currency, customer, department, term_of_payments, }: TTotalPerLineItem) => {
    unitPrice: number;
    total: number;
};
declare const getSubtotal: (finalDiscount: TFinalDiscount, lineItems: TTotalPerLineItem[], otherAmount: number) => {
    totalLineItems: number;
    totalDiscount: number;
    totalTaxes: number;
    total: number;
};
type TTotalPerLineItem = {
    line_item: TLineItemBodyReq;
    currency: {
        id?: string;
    };
    customer: {
        classification: {
            id?: string;
        };
    };
    department: {
        id?: string;
    };
    term_of_payments: {
        due_days: number;
    }[];
};
type TFinalDiscount = {
    type: string;
    input_type: string;
    rate?: number;
    amount?: number;
};

export { Classification, Currency, TAccountItem, TBillOfMaterials, TBillOfMaterialsForm, TCompanyItem, TContactItem, TCreateBillOfMaterialsOptions, TCreateBillOfMaterialsPayload, TCreateBillOfMaterialsResponse, TCreateFormulaOptions, TCreateFormulaPayload, TCreateFormulaResponse, TCreateJobRoleOptions, TCreateJobRolePayload, TCreateJobRoleResponse, TCreateLaboursOptions, TCreateLaboursPayload, TCreateLaboursResponse, TCreateLineProductionsOptions, TCreateLineProductionsPayload, TCreateLineProductionsResponse, TCreateMachineOptions, TCreateMachinePayload, TCreateMachineResponse, TCreateOperatorScheduleOptions, TCreateOperatorSchedulePayload, TCreateOperatorScheduleResponse, TCreatePlantsOptions, TCreatePlantsPayload, TCreatePlantsResponse, TCreateProductionCategoriesOptions, TCreateProductionCategoriesPayload, TCreateProductionCategoriesResponse, TCreateProductionIssuesOptions, TCreateProductionIssuesPayload, TCreateProductionIssuesResponse, TCreateProductionPhaseOptions, TCreateProductionPhasePayload, TCreateProductionPhaseResponse, TCreateProductionPlansOptions, TCreateProductionPlansPayload, TCreateProductionPlansResponse, TCreateRecurringTransactionsOptions, TCreateRecurringTransactionsPayload, TCreateRecurringTransactionsResponse, TCreateReportTemplateOptions, TCreateReportTemplatePayload, TCreateReportTemplateResponse, TCreateSchedulesOptions, TCreateSchedulesPayload, TCreateSchedulesResponse, TCreateStandardCostOptions, TCreateStandardCostPayload, TCreateStandardCostResponse, TCreateWorkOrderPhaseProgressOptions, TCreateWorkOrderPhaseProgressPayload, TCreateWorkOrderPhaseProgressResponse, TCurrency, TDeleteBillOfMaterialsOptions, TDeleteBillOfMaterialsPayload, TDeleteBillOfMaterialsResponse, TDeleteFormulasOptions, TDeleteFormulasPayload, TDeleteFormulasResponse, TDeleteJobRoleOptions, TDeleteJobRolePayload, TDeleteJobRoleResponse, TDeleteLaboursOptions, TDeleteLaboursPayload, TDeleteLaboursResponse, TDeleteLineProductionsOptions, TDeleteLineProductionsPayload, TDeleteLineProductionsResponse, TDeleteMachineOptions, TDeleteMachinePayload, TDeleteMachineResponse, TDeleteOperatorScheduleOptions, TDeleteOperatorSchedulePayload, TDeleteOperatorScheduleResponse, TDeletePlantsOptions, TDeletePlantsPayload, TDeletePlantsResponse, TDeleteProductionCategoriesOptions, TDeleteProductionCategoriesPayload, TDeleteProductionCategoriesResponse, TDeleteProductionIssuesOptions, TDeleteProductionIssuesPayload, TDeleteProductionIssuesResponse, TDeleteProductionPhaseOptions, TDeleteProductionPhasePayload, TDeleteProductionPhaseResponse, TDeleteProductionPlansOptions, TDeleteProductionPlansPayload, TDeleteRecurringTransactionOptions, TDeleteRecurringTransactionPayload, TDeleteRecurringTransactionResponse, TDeleteReportTemplateOptions, TDeleteReportTemplatePayload, TDeleteReportTemplateResponse, TDeleteSchedulesOptions, TDeleteSchedulesPayload, TDeleteSchedulesResponse, TDeleteStandardCostOptions, TDeleteStandardCostPayload, TDeleteStandardCostResponse, TDeleteWorkOrderPhaseProgressOptions, TDeleteWorkOrderPhaseProgressPayload, TDeleteWorkOrderPhaseProgressResponse, TDepartment, TFinalDiscount, TFormulaForm, TFormulas, TJobRole, TJobRoleForm, TLabours, TLaboursForm, TLineItemBodyReq, TLineProductions, TLineProductionsForm, TLoginBodyReq, TMachine, TMachineForm, TOperatorSchedule, TOperatorScheduleForm, TPlants, TPlantsForm, TProductItem, TProductionCategories, TProductionCategoriesForm, TProductionIssues, TProductionIssuesForm, TProductionPhase, TProductionPhaseFilterForm, TProductionPhaseForm, TProductionPlans, TProductionPlansForm, TProject, TQCInsulatingForm, TRecurringTransaction, TRecurringTransactionsForm, TReportTemplateForm, TReportTemplateV1, TReportTemplates, TResPostSession$1 as TResPostSession, TSalesOrderItem, TSchedules, TSchedulesForm, TStandardCost, TStandardCostForm, TTax, TTotalPerLineItem, TUnit, TUpdateBillOfMaterialsOptions, TUpdateBillOfMaterialsPayload, TUpdateBillOfMaterialsResponse, TUpdateFormulasOptions, TUpdateFormulasPayload, TUpdateFormulasResponse, TUpdateJobRoleOptions, TUpdateJobRolePayload, TUpdateJobRoleResponse, TUpdateLaboursOptions, TUpdateLaboursPayload, TUpdateLaboursResponse, TUpdateLineProductionsOptions, TUpdateLineProductionsPayload, TUpdateLineProductionsResponse, TUpdateMachineOptions, TUpdateMachinePayload, TUpdateMachineResponse, TUpdateOperatorScheduleOptions, TUpdateOperatorSchedulePayload, TUpdateOperatorScheduleResponse, TUpdatePlantsOptions, TUpdatePlantsPayload, TUpdatePlantsResponse, TUpdateProductionCategoriesOptions, TUpdateProductionCategoriesPayload, TUpdateProductionCategoriesResponse, TUpdateProductionIssuesOptions, TUpdateProductionIssuesPayload, TUpdateProductionIssuesResponse, TUpdateProductionPhaseOptions, TUpdateProductionPhasePayload, TUpdateProductionPhaseResponse, TUpdateProductionPlansOptions, TUpdateProductionPlansPayload, TUpdateProductionPlansResponse, TUpdateRecurringTransactionsOptions, TUpdateRecurringTransactionsPayload, TUpdateRecurringTransactionsResponse, TUpdateReportTemplateOptions, TUpdateReportTemplatePayload, TUpdateReportTemplateResponse, TUpdateSchedulesOptions, TUpdateSchedulesPayload, TUpdateSchedulesResponse, TUpdateStandardCostOptions, TUpdateStandardCostPayload, TUpdateStandardCostResponse, TUpdateUserSettings, TUpdateUserSettingsPayload, TUpdateUserSettingsResponse, TUpdateWorkOrderPhaseOptions, TUpdateWorkOrderPhasePayload, TUpdateWorkOrderPhaseProgressOptions, TUpdateWorkOrderPhaseProgressPayload, TUpdateWorkOrderPhaseProgressResponse, TUpdateWorkOrderPhaseResponse, TWarehouse, TWorkOrderPhases, TWorkOrderProgress, TWorkOrderProgressForm, TWorkOrders, bomSchemaValidation, deleteBillOfMaterials, deleteFormulas, deleteJobRole, deleteLabours, deleteLineProductions, deleteMachine, deleteOperatorSchedule, deletePlants, deleteProductionCategories, deleteProductionIssues, deleteProductionPhase, deleteProductionPlans, deleteSchedules, formulaFormSchema, getSubtotal, instanceAxios, machineValidationSchema, multiPrice, plantValidationSchema, productionPhaseFilterFormSchema, productionPhaseFormSchema, setDefaultHeaders, totalPerLineItem, useApiV1PostSession, useBillOfMaterialsForm, useBillOfMaterialsPhasesForm, useCreateBillOfMaterials, useCreateFormulas, useCreateJobRole, useCreateLabours, useCreateLineProductions, useCreateMachine, useCreateOperatorSchedule, useCreatePlants, useCreateProductionCategories, useCreateProductionIssues, useCreateProductionPhase, useCreateProductionPlans, useCreateRecurringTransactions, useCreateReportTemplate, useCreateSchedules, useCreateStandardCost, useCreateWorkOrderPhaseProgress, useDebounce, useDeleteRecurringTransaction, useDeleteReportTemplate, useDeleteStandardCost, useDeleteWorkOrderPhaseProgress, useFormLineItem, useFormulaForm, useFormulaRawMaterialsForm, useFormulaScrapsForm, useGetCompanies, useInfiniteQueryApiV1GetBillOfMaterials, useInfiniteQueryApiV1GetFormulas, useInfiniteQueryApiV1GetJobRole, useInfiniteQueryApiV1GetLabours, useInfiniteQueryApiV1GetLineProductions, useInfiniteQueryApiV1GetMachine, useInfiniteQueryApiV1GetOperatorSchedule, useInfiniteQueryApiV1GetPlants, useInfiniteQueryApiV1GetProductionCategories, useInfiniteQueryApiV1GetProductionIssues, useInfiniteQueryApiV1GetProductionPhase, useInfiniteQueryApiV1GetProductionPlans, useInfiniteQueryApiV1GetReportTemplates, useInfiniteQueryApiV1GetSchedules, useInfiniteQueryApiV1GetStandardCost, useInfiniteQueryApiV1GetWorkOrderPhases, useInfiniteQueryApiV1GetWorkOrderProgress, useInfiniteQueryApiV1GetWorkOrders, useInfiniteQueryApiV2GetAccounts, useInfiniteQueryApiV2GetContacts, useInfiniteQueryApiV2GetCurrencies, useInfiniteQueryApiV2GetDepartments, useInfiniteQueryApiV2GetProducts, useInfiniteQueryApiV2GetProjects, useInfiniteQueryApiV2GetRecurringTransactions, useInfiniteQueryApiV2GetReportTemplates, useInfiniteQueryApiV2GetSalesOrders, useInfiniteQueryApiV2GetTaxes, useInfiniteQueryApiV2GetUnits, useInfiniteQueryApiV2GetWarehouses, useJobRoleForm, useLaboursForm, useLineProductionsForm, useLoginForm, useMachineForm, useMutationApiV1GetBillMaterialPhases, useMutationApiV1GetDefaultProductionPlans, useMutationApiV1GetDetailReportTemplates, useMutationApiV1GetDetailWorkOrderProgress, useMutationApiV2GetDetailAccount, useMutationApiV2GetDetailContact, useMutationApiV2GetDetailCurrencies, useMutationApiV2GetDetailDepartments, useMutationApiV2GetDetailProducts, useMutationApiV2GetDetailProjects, useMutationApiV2GetDetailRecurringTransactions, useMutationApiV2GetDetailReportTemplates, useMutationApiV2GetDetailSalesOrder, useMutationApiV2GetDetailTaxes, useMutationApiV2GetDetailUnits, useMutationApiV2GetDetailWarehouses, useOperatorScheduleForm, usePlantsForm, usePostSession, usePostToken, useProductionCategoriesForm, useProductionIssuesForm, useProductionPhaseFilterForm, useProductionPhaseForm, useProductionPhaseQualityCheckItemsForm, useProductionPhaseSubStagesForm, useProductionPlansFinishGoodsForm, useProductionPlansForm, useQCInsulatingFinishGoodsForm, useQCInsulatingForm, useQueryApiV1GetBillMaterialPhases, useQueryApiV1GetDetailLabours, useQueryApiV1GetDetailMachine, useQueryApiV1GetDetailPlants, useQueryApiV1GetDetailProductionPhase, useQueryApiV1GetDetailProductionPlans, useQueryApiV1GetDetailReportTemplates, useQueryApiV1GetDetailWorkOrderPhase, useQueryApiV1GetDetailWorkOrderPhases, useQueryApiV1GetDetailWorkOrderProgress, useQueryApiV2GetDetailBillOfMaterials, useQueryApiV2GetDetailCurrencies, useQueryApiV2GetDetailDepartments, useQueryApiV2GetDetailFormulas, useQueryApiV2GetDetailJobRole, useQueryApiV2GetDetailLineProductions, useQueryApiV2GetDetailOperatorSchedule, useQueryApiV2GetDetailProductionCategories, useQueryApiV2GetDetailProductionIssues, useQueryApiV2GetDetailProjects, useQueryApiV2GetDetailRecurringTransactions, useQueryApiV2GetDetailReportTemplates, useQueryApiV2GetDetailSchedules, useQueryApiV2GetDetailStandardCost, useQueryApiV2GetDetailTaxes, useQueryApiV2GetDetailUnits, useQueryApiV2GetDetailWarehouses, useQueryApiV2GetDetailWorkOrderPhases, useQueryApiV2GetDetailWorkOrders, useRecurringTransactionsForm, useReportTemplateForm, useSchedulesForm, useSchedulesShiftsForm, useStandardCostForm, useUpdateBillOfMaterials, useUpdateFormulas, useUpdateJobRole, useUpdateLabours, useUpdateLineProductions, useUpdateMachine, useUpdateOperatorSchedule, useUpdatePlants, useUpdateProductionCategories, useUpdateProductionIssues, useUpdateProductionPhase, useUpdateProductionPlans, useUpdateRecurringTransactions, useUpdateReportTemplate, useUpdateSchedules, useUpdateStandardCost, useUpdateUserSettings, useUpdateWorkOrderPhase, useUpdateWorkOrderPhaseProgress, useWorkOrderProgressForm, useWorkOrderProgressScrapsForm, workOrderProgressFormSchema };
