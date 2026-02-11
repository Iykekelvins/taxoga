export default function Stats() {
	return (
		<section>
			<div className='grid grid-cols-[1fr_1fr_0.7fr] h-[max(9.375rem,91px)]'>
				<div
					className='h-full flex flex-col items-center 
        justify-center gap-[max(13px,0.813rem)] text-center bg-mint'>
					<h2 className='text-white text-60 font-semibold leading-[0.6]'>N150M</h2>
					<p className='text-16 text-extra-light-grey'>Tax Value Filed</p>
				</div>
				<div
					className='h-full flex flex-col items-center 
        justify-center gap-[max(13px,0.813rem)] text-center bg-orange'>
					<h2 className='text-white text-60 font-semibold leading-[0.6]'>250</h2>
					<p className='text-16 text-extra-light-grey'>Active Audience</p>
				</div>
				<div
					className='h-full flex flex-col items-center 
        justify-center gap-[max(13px,0.813rem)] text-center bg-cyan'>
					<h2 className='text-white text-60 font-semibold leading-[0.6]'>145k</h2>
					<p className='text-16 text-extra-light-grey'>Returns Filed</p>
				</div>
			</div>
		</section>
	);
}
