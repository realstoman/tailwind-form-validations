const Button = ({ title, icon, ariaLabel }) => {
	return (
		<button
			aria-label={ariaLabel}
			type="button"
			className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 flex items-center justify-center w-full py-3 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-300 dark:border-gray-700 hover:border-purple-400 focus:ring-purple-400 dark:hover:border-purple-600"
		>
			{icon}
			<p>{title}</p>
		</button>
	);
};

export default Button;
