import { useState } from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import Button from './components/Button';
import { countries } from './data/countries';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex justify-center items-center min-h-screen px-4">
			<div className="flex flex-col items-center pt-6 sm:justify-center w-full">
				<div>
					<a href="/">
						<h3 className="text-4xl font-bold text-purple-600">
							Logo now
						</h3>
					</a>
				</div>
				<div className="w-full px-6 py-4 mt-6  bg-white dark:bg-gray-900 shadow-md rounded-md sm:rounded-lg max-w-sm">
					<form>
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
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
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
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
						</div>
						<div className="mt-4">
							<label
								for="country"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Select your country
							</label>
							<select
								id="country"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
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
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
						</div>
						<a
							href="#"
							className="text-xs text-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-100 hover:underline pt-1"
						>
							Forget Password?
						</a>
						<div className="flex items-center mt-4">
							<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
								Register
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
						<hr className="w-full" />
						<p className="px-3 ">OR</p>
						<hr className="w-full" />
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
			</div>
		</div>
	);
}

export default App;
