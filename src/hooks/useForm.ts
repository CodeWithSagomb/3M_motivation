import { useState, useCallback } from 'react';

interface FormState<T> {
    values: T;
    errors: Record<keyof T, string | null>;
    isSubmitting: boolean;
    isSuccess: boolean;
}

interface UseFormOptions<T> {
    initialValues: T;
    onSubmit: (values: T) => Promise<void>;
    validate?: (values: T) => Partial<Record<keyof T, string>>;
}

/**
 * Generic form hook with validation and submission handling
 * Follows Strategy pattern for validation
 */
export function useForm<T extends Record<string, unknown>>({
    initialValues,
    onSubmit,
    validate,
}: UseFormOptions<T>) {
    const [state, setState] = useState<FormState<T>>({
        values: initialValues,
        errors: {} as Record<keyof T, string | null>,
        isSubmitting: false,
        isSuccess: false,
    });

    const setValue = useCallback((field: keyof T, value: unknown) => {
        setState(prev => ({
            ...prev,
            values: { ...prev.values, [field]: value },
            errors: { ...prev.errors, [field]: null },
            isSuccess: false,
        }));
    }, []);

    const handleSubmit = useCallback(async (e?: React.FormEvent) => {
        e?.preventDefault();

        // Validate if function provided
        if (validate) {
            const validationErrors = validate(state.values);
            if (Object.keys(validationErrors).length > 0) {
                setState(prev => ({
                    ...prev,
                    errors: validationErrors as Record<keyof T, string | null>,
                }));
                return;
            }
        }

        setState(prev => ({ ...prev, isSubmitting: true }));

        try {
            await onSubmit(state.values);
            setState(prev => ({
                ...prev,
                isSubmitting: false,
                isSuccess: true,
                values: initialValues,
            }));
        } catch (error) {
            setState(prev => ({
                ...prev,
                isSubmitting: false,
                errors: {
                    ...prev.errors,
                    _form: error instanceof Error ? error.message : 'Une erreur est survenue',
                } as Record<keyof T, string | null>,
            }));
        }
    }, [state.values, initialValues, onSubmit, validate]);

    const reset = useCallback(() => {
        setState({
            values: initialValues,
            errors: {} as Record<keyof T, string | null>,
            isSubmitting: false,
            isSuccess: false,
        });
    }, [initialValues]);

    return {
        values: state.values,
        errors: state.errors,
        isSubmitting: state.isSubmitting,
        isSuccess: state.isSuccess,
        setValue,
        handleSubmit,
        reset,
    };
}
