import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string | null;
}

/**
 * Reusable Input component with label and error handling
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s/g, '-');

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'w-full bg-offwhite border-none rounded-xl p-4 text-petrol',
                        'focus:outline-none focus:ring-2 focus:ring-gold transition-all',
                        'placeholder:text-gray-400',
                        error && 'ring-2 ring-red-500',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string | null;
}

/**
 * Reusable Textarea component
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, className, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s/g, '-');

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'w-full bg-offwhite border-none rounded-xl p-4 text-petrol resize-none',
                        'focus:outline-none focus:ring-2 focus:ring-gold transition-all',
                        'placeholder:text-gray-400',
                        error && 'ring-2 ring-red-500',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { value: string; label: string }[];
    error?: string | null;
}

/**
 * Reusable Select component
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, options, error, className, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s/g, '-');

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'w-full bg-offwhite border-none rounded-xl p-4 text-petrol',
                        'focus:outline-none focus:ring-2 focus:ring-gold transition-all',
                        error && 'ring-2 ring-red-500',
                        className
                    )}
                    {...props}
                >
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';
