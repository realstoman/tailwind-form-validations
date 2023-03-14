import { useState } from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import Button from './components/Button';
import { countries } from './data/countries';

function App() {
	const [data, setData] = useState({
		fullName: '',
		email: '',
		country: '',
		password: '',
	});

	const handleRegistration = (e) => {
		e.preventDefault();

		console.log(data);
	};

	const { ...allData } = data;

	// Disable submit button until all fields are filled in
	const canSubmit = [...Object.values(allData)].every(Boolean);

	return (
		<div className="flex justify-center items-center min-h-screen px-4">
			<div className="flex flex-col items-center py-10 sm:justify-center w-full">
				<div className="w-full px-6 py-6  bg-white dark:bg-gray-900 shadow-md rounded-md sm:rounded-lg max-w-sm">
					<form
						action=""
						onSubmit={handleRegistration}
						className="group"
					>
						<div>
							<label
								htmlFor="fullName"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Full Name
							</label>
							<div className="flex flex-col items-start">
								<input
									type="text"
									name="fullName"
									placeholder="Full Name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
									pattern="[0-9a-zA-Z ]{6,}"
									required
									onChange={(e) => {
										setData({
											...data,
											fullName: e.target.value,
										});
									}}
								/>
								<span className="mt-1 hidden text-sm text-red-400">
									Full name must be at least 6 characters long
								</span>
							</div>
						</div>
						<div className="mt-4">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Email
							</label>
							<div className="flex flex-col items-start">
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
									autoComplete="off"
									required
									pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
									onChange={(e) => {
										setData({
											...data,
											email: e.target.value,
										});
									}}
								/>
								<span className="mt-1 hidden text-sm text-red-400">
									Please enter a valid email address.{' '}
								</span>
							</div>
						</div>
						<div className="mt-4">
							<label
								htmlFor="country"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Select your country
							</label>
							<select
								id="country"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
								onChange={(e) => {
									setData({
										...data,
										country: e.target.value,
									});
								}}
							>
								{countries.map((country) => (
									<option
										key={country.code}
										value={country.code}
									>
										{country.name}
									</option>
								))}
							</select>
						</div>

						<div className="mt-4">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Password
							</label>
							<div className="flex flex-col items-start">
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
									autoComplete="off"
									required
									pattern="[0-9a-zA-Z]{8,}"
									onChange={(e) => {
										setData({
											...data,
											password: e.target.value,
										});
									}}
								/>
								<span className="mt-1 hidden text-sm text-red-400">
									Password must be at least 8 characters.{' '}
								</span>
							</div>
						</div>
						<div className="mt-4">
							<label
								htmlFor="password_confirmation"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Confirm Password
							</label>
							<div className="flex flex-col items-start">
								<input
									type="password"
									name="password_confirmation"
									placeholder="Confirm password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
									autoComplete="off"
									required
									pattern="[0-9a-zA-Z]{8,}"
									onChange={(e) => {
										setData({
											...data,
											password: e.target.value,
										});
									}}
								/>
								<span className="mt-1 hidden text-sm text-red-400">
									Password must be at least 8 characters.{' '}
								</span>
							</div>
						</div>
						<div className="flex items-center mt-4">
							<button
								type="submit"
								disabled={!canSubmit}
								className="w-full text-white bg-purple-700 hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2 disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:pointer-events-none group-invalid:opacity-70"
							>
								Create account
							</button>
						</div>
					</form>
					<div className="mt-4 text-zinc-600 text-md dark:text-zinc-300">
						Already have an account?{' '}
						<span>
							<a
								className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-100 hover:underline"
								href="#"
							>
								Login instead
							</a>
						</span>
					</div>
					<div className="flex items-center w-full my-4">
						<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
						<p className="px-3 ">OR</p>
						<hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
					</div>
					<div className="my-6 space-y-2">
						<Button
							title="Continue with Github"
							ariaLabel="Continue with Github"
							icon={<FiGithub className="text-xl" />}
						/>
						<Button
							title="Continue with Twitter"
							ariaLabel="Continue with Twitter"
							icon={<FiTwitter className="text-xl" />}
						/>
					</div>
				</div>
				<div className="flex items-center justify-center mt-6 ">
					<a
						href="https://github.com/realstoman/tailwind-form-validations"
						target="__blank"
						className="text-gray-700 hover:text-gray-900 cursor-pointer underline text-xl"
					>
						Github repo
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
