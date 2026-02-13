import { TAXBRACKETS } from '@/lib/mock';

export default function TaxBrackets() {
	return (
		<div className='mt-[max(2rem,24px)]'>
			<div
				className='border border-[#0000001A] border-solid bg-white
				rounded-[max(1.5rem,24px)] p-[max(1.5rem,24px)]
				'>
				<h2 className='text-24 text-near-black font-bold leading-[1.3]'>
					2025 Tax Brackets (Progressive Rates)
				</h2>

				<div className='w-full overflow-x-auto mt-[max(15px,0.938rem)]'>
					<table className='w-full border-collapse'>
						<thead>
							<tr>
								<th
									className='text-near-black text-16 font-bold py-[max(0.875rem,14px)]
								border-b border-b-[#0000001A] border-solid text-left pl-[max(1rem,16px)]
								'>
									Income Range
								</th>
								<th
									className='text-near-black text-16 font-bold py-[max(0.875rem,14px)]
								border-b border-b-[#0000001A] border-solid text-center whitespace-nowrap
								pl-[max(1rem,16px)]
								'>
									Tax Rate
								</th>
								<th
									className='text-near-black text-16 font-bold py-[max(0.875rem,14px)]
								border-b border-b-[#0000001A] border-solid text-right whitespace-nowrap
								pl-[max(1rem,16px)]
								'>
									Max Tax in Bracket
								</th>
							</tr>
						</thead>
						<tbody>
							{TAXBRACKETS.map((tax, i) => (
								<tr key={i}>
									<td
										className={`text-near-black text-16 py-[max(0.875rem,14px)] pl-[max(1rem,16px)]
									${i !== TAXBRACKETS.length - 1 ? 'border-b border-b-[#0000001A] border-solid' : ''}
									whitespace-nowrap	
									`}>
										{tax.income_range}
									</td>
									<td
										className={`py-[max(0.875rem,14px)]
										${i !== TAXBRACKETS.length - 1 ? 'border-b border-b-[#0000001A] border-solid' : ''}	`}>
										<div className='flex items-center justify-center'>
											<span
												className='flex items-center justify-center rounded-[max(0.5rem,8px)]
											text-white w-fit text-12 font-medium h-[max(1.375rem,22px)] min-w-[max(2.75rem,44px)]
										px-[max(4px,0.25rem)]
										'
												style={{
													backgroundColor: tax.background,
												}}>
												{tax.rate}
											</span>
										</div>
									</td>

									<td
										className={`text-charcoal text-right py-[max(0.875rem,14px)] text-16
										${i !== TAXBRACKETS.length - 1 ? 'border-b border-b-[#0000001A] border-solid' : ''}`}>
										{tax.max_tax}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
