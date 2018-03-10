SET REFERENTIAL_INTEGRITY FALSE;

insert into inventor (id, firstname, lastname, nationality, born, died) values
(1, 'Jozef', 'Murgaš', 'Slovak', 1864, 1929),
(2, 'Thomas', 'Edison', 'American', 1847, 1931),
(3, 'Nikola', 'Tesla', 'Serbian-American', 1856, 1943);

insert into patent (id, inventor_id, name, year, description) values
(1, 1, 'Wireless telegraphy', 1909, 'Transmission systems in which the medium consists of the earth or a large mass of water thereon, e.g. earth telegraphy'),
(2, 1, 'Spinning reel for fishing rod', 1912, 'Brake devices for reels with a rotary drum, i.e. for reels with a rotating spool'),
(3, 1, 'Wave meter', 1907, 'Arrangements for measuring frequency, e.g. pulse repetition rate Arrangements for measuring period of current or voltage adapted for measuring in circuits having distributed constants'),
(4, 1, 'Electrical transformer', 1907, 'Inductances without magnetic core'),
(5, 1, 'Apparatus for making electrical oscillations', 1911, 'Collector cooling devices'),
(6, 1, 'Magnetic detector', 1909, 'Circuits'),

(11, 2, 'Telegraph Apparatus', 1872, 'Apparatus or local circuits for step-by-step systems'),
(12, 2, 'Printing-Telegraph Instruments', 1873, 'Printing mechanisms'),
(13, 2, 'Vacuum Apparatus', 1881, 'Jet pumps, i.e. devices in which flow is induced by pressure drop caused by velocity of another fluid flow the inducing fluid being liquid displacing elastic fluids the elastic fluid being entrained in a free falling column of liquid'),
(14, 2, 'Phonograph', 1889, 'Apparatus characterised by the shape of record carrier employed but not specific to the method of recording or reproducing, e.g. dictating apparatus; Combinations of such apparatus using cylindrical record carriers'),
(15, 2, 'Automobile', 1910, 'Arrangement or mounting of transmissions in vehicles the ultimate propulsive elements, e.g. ground wheels, being steerable'),
(16, 2, 'Apparatus for Recording and Reproducing Motion and Sounds', 1916, 'Associated working of cameras or projectors with sound recording or reproducing means');

SET REFERENTIAL_INTEGRITY TRUE;