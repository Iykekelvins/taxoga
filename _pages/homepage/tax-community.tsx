import { CommentIcon, LikeIcon } from '@/components/icons';
import Tag from '@/components/tag';
import Image from 'next/image';

export default function TaxCommunity() {
	return (
		<section className='bg-cream-peach py-[max(5rem,80px)]'>
			<div className='px-gutter'>
				<div className='app-container'>
					<div className='space-y-[max(1.5rem,24px)]'>
						<Tag variant='gradient'>Tax Community</Tag>
						<h2 className='text-heading text-40 font-bold leading-[1.7]'>
							A Vibrant Community You Can Count On.
						</h2>
						<p className='text-20 text-charcoal-grey leading-[1.7] -mt-[max(1rem,16px)]'>
							Find answers to your tax questions. Learn from real world scenarios and
							contribute to tax knowledge.
						</p>
					</div>
				</div>
			</div>

			<div className='mt-[max(2.5rem,40px)] overflow-x-hidden'>
				<div className='flex items-center gap-[max(1.5rem,24px)] w-fit track'>
					<ul className='flex items-center gap-[max(1.5rem,24px)]'>
						{[...Array(3)].map((_, i) => (
							<li
								key={i}
								className='bg-white rounded-[max(2.5rem,40px)] 
                py-[max(1.375rem,18px)] px-[max(1rem,16px)]
                min-w-[max(25.813rem,400px)] self-stretch
                '>
								<div className='flex items-start gap-[max(1rem,16px)]'>
									<div className='flex flex-col items-center gap-[max(0.438rem,7px)]'>
										<LikeIcon />
										<p className='text-14 text-cool-grey'>12</p>
									</div>

									<div className='space-y-[max(1.25rem,20px)]'>
										<h3 className='text-24 font-semibold'>How can I avoid Tax?</h3>
										<p className='text-slate text-14 leading-[1.7]'>
											I work as a civil servant in Lagos and I&apos;m trying to
											understand how to calculate my taxable income. Do I include all
											allowances? What about housing ...
										</p>
										<p className='text-cool-grey text-14 space-x-[max(1.25rem,16px)]'>
											<span>Asked by Adebayo M.</span> <span>2 hours ago</span>
										</p>
										<button
											className='flex items-center gap-[max(0.875rem,14px)]
                    h-[max(2rem,32px)] border border-[#0000001A] border-solid
                    rounded-[max(0.5rem,8px)] px-[max(0.75rem,11px)]
                    '>
											<CommentIcon />{' '}
											<span className='text-near-black text-14 font-medium'>
												1 Answer
											</span>
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
					<ul className='flex items-center gap-[max(1.5rem,24px)]'>
						{[...Array(3)].map((_, i) => (
							<li
								key={i}
								className='bg-white rounded-[max(2.5rem,40px)] 
                py-[max(1.375rem,18px)] px-[max(1rem,16px)]
                min-w-[max(25.813rem,400px)] self-stretch
                '>
								<div className='flex items-start gap-[max(1rem,16px)]'>
									<div className='flex flex-col items-center gap-[max(0.438rem,7px)]'>
										<LikeIcon />
										<p className='text-14 text-cool-grey'>12</p>
									</div>

									<div className='space-y-[max(1.25rem,20px)]'>
										<h3 className='text-24 font-semibold'>How can I avoid Tax?</h3>
										<p className='text-slate text-14 leading-[1.7]'>
											I work as a civil servant in Lagos and I&apos;m trying to
											understand how to calculate my taxable income. Do I include all
											allowances? What about housing ...
										</p>
										<p className='text-cool-grey text-14 space-x-[max(1.25rem,16px)]'>
											<span>Asked by Adebayo M.</span> <span>2 hours ago</span>
										</p>
										<button
											className='flex items-center gap-[max(0.875rem,14px)]
                    h-[max(2rem,32px)] border border-[#0000001A] border-solid
                    rounded-[max(0.5rem,8px)] px-[max(0.75rem,11px)]
                    '>
											<CommentIcon />{' '}
											<span className='text-near-black text-14 font-medium'>
												1 Answer
											</span>
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='flex items-center justify-center mt-[max(2.5rem,40px)] px-gutter'>
				<figure>
					<Image
						src='/home/word-cloud.webp'
						width={858}
						height={684}
						alt='a word cloud'
					/>
				</figure>
			</div>
		</section>
	);
}
