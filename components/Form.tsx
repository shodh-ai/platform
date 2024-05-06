import { FC } from 'react';

import type { HTMLProps, ComponentProps } from 'react';

interface IFormSubComponents {
	Item: typeof Item;
	Label: typeof Label;
	TextInput: typeof TextInput;
	SubmitButton: typeof SubmitButton;
}

const Item: FC<HTMLProps<HTMLDivElement>> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div className={`w-full ${className ?? ''}`} {...rest}>
			{children}
		</div>
	);
};

const TextInput: FC<HTMLProps<HTMLInputElement>> = (props) => {
	return (
		<input
			type="text"
			className="w-full rounded-md border border-astronaut/20 bg-astronaut/5 px-[22px] py-[18px] font-semibold text-astronaut"
			{...props}
		/>
	);
};

const Label: FC<HTMLProps<HTMLLabelElement>> = (props) => {
	const { children, ...rest } = props;

	return (
		<label className="mb-[14px] text-base font-medium text-astronaut" {...rest}>
			{children}
		</label>
	);
};

const SubmitButton: FC<ComponentProps<'button'>> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<button
			type="submit"
			className={`rounded-full bg-sugarMint px-7 py-[15px] font-semibold text-astronaut ${className ?? ''}`}
			{...rest}
		>
			{children}
		</button>
	);
};

const Form: FC<HTMLProps<HTMLFormElement>> & IFormSubComponents = (props) => {
	const { children, className, ...rest } = props;

	return (
		<form className={`grid w-full gap-6 ${className ?? ''}`} {...rest}>
			{children}
		</form>
	);
};

Form.Item = Item;
Form.Label = Label;
Form.TextInput = TextInput;
Form.SubmitButton = SubmitButton;

export default Form;
