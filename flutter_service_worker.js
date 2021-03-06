'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "63564227d2b7eacea2acbbb35c0887bd",
".git/config": "a361d060d90def5f97b6421ff721a733",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9df68b7d133056301a7490001c77486e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcb545e83d5343db0a818f4806579b21",
".git/logs/refs/heads/main": "ef098294e68996d7b0d6af2c649577aa",
".git/logs/refs/remotes/origin/main": "4bb47224ade4f23a024ab12cf5a1a3a0",
".git/objects/03/1abe99abe49ee7552a923ace370f2411e1f561": "1834d9128eacda52646ae97ac8ae6d4c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/680c90c96ef7d8c40f8f0a915d0af54d70a4ba": "144ba2fb78a59b56174361518d28403c",
".git/objects/06/be9370f8b6bcc2eaee7a6e3c77b175735e0492": "54169b1732f07547e8279a6e318a7a53",
".git/objects/07/9a70550d5b2413d128091d7464de83f2088c28": "905124d51e9f9a943fb72d9aac8ee0e4",
".git/objects/0b/6474fb2eed65b50c4a42b7387df2273010fbb2": "af1391ec6ae94863913025bf6f5b98ba",
".git/objects/0f/5cff9bc34d27c676327177e1db3d8aa82e1f3c": "d8afde7a257b1196dfa6bf2674a2c4e3",
".git/objects/0f/f23fc686e8e0853eede9313a5714277bad645b": "d75b83e688f730bfe8dc13a033a6d2c5",
".git/objects/13/3be7254cad79949db9826985f0f94460154217": "14a0032600647f604b0cd5f9fddab417",
".git/objects/14/4fd95adc4814a55f177a9f291c35da9efa4947": "55438a119e3afc50be6eaebb0842695a",
".git/objects/17/37951bb3fa0b72cf624a43a9521d5374b04c45": "0cfd29d97b2e8765c69b4df013b63a2a",
".git/objects/1a/ef2b0c5069d1641b4da2ff2faa6234f8f01cd5": "54100f6c8573bf93cf98832523a7af48",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/cc21fdaf48cb8ab24fc46769172a1668e1bf4c": "45bfb060fa8605748dd6e839887307f5",
".git/objects/1f/d2b89b47bd860aa83c58ca907887e2b85c1b21": "2f9a4704b5da48249264ed8927617241",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/981c24a98406d56fa7923a7ea64a2257f9ecd1": "398d915704bcc2e052e094b9c08dd8b2",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/2c/97c703760996802d9662a34cfec3db6b7dbd3e": "737276bafedb8207216a43debd3b864a",
".git/objects/2d/04944a7bc0eb1eb67abe1980ebc15e6d093029": "b8f2508c5b81595d1807411a2b88bc80",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2f/aaa34df9260a137c152c079de10d29fff3b952": "b34409ea9e4f5bacec714dd8b48d11ad",
".git/objects/30/dcf975204e2866898e3a02b1a54ff107743baf": "62854a536662fc56756e167f7b9e9527",
".git/objects/31/c420a2352b4de28453673cd25f614caa818252": "c31bbca99760754da58735a4001cee57",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/27a2650cc990667fa00c69c67502e70983de8f": "574100b17442b6952c3edebfb5429090",
".git/objects/35/950551f23aa0a128153b303421ddbf49c68888": "f0916194e14dfb41ca4de19a24d70eb5",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/38/ecda27af7f036729db7c2f8e588eaab94f0fb3": "3bd20dff4109ac1ab9729f7ae16cb405",
".git/objects/39/3bd629317242eadab1bed43f8784b5339e42d1": "69d35d2dbd490898e8e4ba2bf3bc94b0",
".git/objects/3d/3d16619ad53cb7a846d227ef44433589cb8cfe": "121f19dfe54af0f6fc0c0728aaf8ae7b",
".git/objects/41/9a0c68656f2374e8a5e0cd926eb46ddd67b363": "465a5bc164ff6ebe6864ff61e0618bc6",
".git/objects/41/ecb5be5af6e4d40dfd885e0a80255fe1bb57e7": "fb6aa4e671c6c549eda434d3ac4e4832",
".git/objects/43/ca739b88c61259db125714d93d5a59b2b787ac": "dc7bfdb7f20e41b19c6ed76dcf5faf3d",
".git/objects/45/aa3ffc3a939ace656402367bc8d7829821af89": "58500cdd0b5912e241404e7540f66832",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b4dfc951ab33bea9c517411a3d44ed7762e06b": "b33b557d3b8db3a9f25afd561a012b3e",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4f/d7ff69e8bbf23209f7057d3d800a034495e9b2": "aa7bf811f508c141694798a722875b24",
".git/objects/50/4f039a89dd7749e02f06db293033145bfc5f19": "eb0453da36382435978ab5966c599485",
".git/objects/57/2ff059e8e9dbe0f051956ea16ae3d06cd488df": "50171f3702edd60dda214fb8d906c0f7",
".git/objects/58/920faa667851b23d3a5dbe840cbd47d3746ccd": "5a9364ada915b773e14a01526d83bded",
".git/objects/58/d50a68962bbdbc1575ca29ec468e833c0398f4": "49c16616cee0731941d4a606bb06ad96",
".git/objects/59/c9e4216acc712ae40a31463c1e8d5eb14b13bd": "77e7a46a0e38ecef00eeffd8cfd1046c",
".git/objects/5d/8b550e544bc6f27ad6ce3ae0b5264baa710f3f": "88544ec46a0f9b8cca39e5dabe399c1c",
".git/objects/5f/2647f8d2ee7416adc8c595188a592b405a8639": "dca3bd211725759207a36fd7e1d9f396",
".git/objects/65/2c0369c9b4ebcd66567bc0cd6fd293272382f3": "fe46ec5592b8505ebb0bb532561b2274",
".git/objects/66/b62793b24716b8d3069fb165718c9dc62b6b67": "20c4179dbc166853ef11b9f44bb34fc6",
".git/objects/67/ba7f504c9ddeb9cfee0179d41baf3b6fe7767a": "2ca0a23e283bd1890408263ffecb7610",
".git/objects/68/65344121d77d539daea8becce7bdfc9dd42d83": "3ddae5be5ecb313d1ba14d8747e41a6a",
".git/objects/6b/dd79f695b9b297006ccbd672d25dbe6a6b810c": "02d0cdd04671d7a012fb051df0df505f",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6c/2a74c7d8ea9dd667aee1cf0c80829edb748c8c": "7bcea5312fcb4810658a90dca878354b",
".git/objects/6e/6406123aa6ddf657fd5b4ec229ebd5bc5ed69f": "63aed1ed47444865e99a78b249534062",
".git/objects/73/869d191283ea5928db0db5e28b0c87e0e69aa8": "c6366ccf8d8f15cb94db84cc2128136b",
".git/objects/75/3abd78b15cfcbcc4dab63b191f2e2b07bb89c2": "0aa13f2ce2d570fcf3c38ca9e000ed6a",
".git/objects/75/69d09296e7118d9189b7a17e242beb7cd6286d": "7caeb8d8dd2fb8b70b91afa4249caa8d",
".git/objects/75/989a123a8de0bbd6de4f3a27d4fa447f04496c": "4d8a96361d5e1e9665e3b3eff697856b",
".git/objects/76/b981d8872f7725d25b18855e3cebb71e332a79": "7cf4432a6d94a9624394b4912a5e4d27",
".git/objects/78/c4f09df07c1dba9dd955619bb0e82726385dda": "01e997e0d79fa93a5a959eacad918335",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c65ba8f71d11e237d023b9b8e32782791fc532": "dabd5a45f356e00f2074045a64d7c163",
".git/objects/7a/663600188e655f89b0cca911274212cb17ed87": "c453586ad77ceaf00f9a957b02e08896",
".git/objects/7b/f9ed0577dd7c58ff911625383130caef3abf89": "64cb2c25f059adc4e766b524a103cfb5",
".git/objects/7c/f9d44a12db7e16df5f29d903031e84e5c073b7": "0f26fb6ca2589c48e84898b956d663dd",
".git/objects/7d/42abe95234edb06d8448eb9ea95350e674c2c8": "2beddede6f8eb994476eb180094b8f74",
".git/objects/7f/7d2320e3519414ce1a48edb11d88252d36bfe6": "a4683c6a3fcc33a7b2e1372d3448f357",
".git/objects/7f/8165e3b805f31cded264a464ea63c1f8f9f571": "1fd05ee783685f77a32394349a81f353",
".git/objects/80/4ac66b7c9f481e33c69054e20ee9b4ab34774a": "cc0f1cb8916f46b720e27a18815b3daa",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2d9a15e850a3d40dadbf9cef2568a98a1a7ce7": "87e41adeeeda06e73db0e9dd87dd8b43",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/424673233a3444702e917d207e68de6b3da845": "3ea550613e1e9b0ee0be9149377a04b5",
".git/objects/8d/7b28df551f5a2f680c61d5f2590e899876c10a": "1832bc545de9f5e1868d2d68fa500dcf",
".git/objects/8f/59e09e485a64574aa9dadae4023760461085c9": "5d69498b1914fdd8db0ba07d2e33f410",
".git/objects/90/1a00c873ebe8780b6b817e237a61906bed5326": "2f5fb680eb25b3b809827ab817700b1d",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/92ee5e486d82323bbd8f39b93905dc2589e1e7": "7924a6f0acd8bebb81a335e1868a63d5",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/606067f16aaea1fbec64de7d1598f166aedc8f": "f89f2b6e2e63cebb1863edd8c6101965",
".git/objects/96/163524db02b9e35a3c1d3a74a61642666101f7": "996fbdd688f22f2bd36fa282600784de",
".git/objects/97/fed243ed18983f97129966715a326d46d89e50": "2490fdfaf96bc1cfc6d125a3e257f587",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9a/4fd99b9a2e3fa10b4903002f8a3b6938eef1d2": "fe4129dfc6a81d53ae8218f7b4e9603f",
".git/objects/9b/5fbc4b3cf24c0f600ab5c0e58f1daf992fbeb7": "dce4cf2b8632975e72224b2411cdb444",
".git/objects/9b/88b06a7eacd2311dd227421bf7ba5ab798c0da": "9504f547dac202c26d1843d17d658ae1",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9c/9e91ae801bcb2e1d22c6506199f828d81a20f5": "6069b092302eada523663314c820f3ac",
".git/objects/a0/ffcfdaa0b7592c67e4a349d0b5f53f8e457214": "855f709b55421a3871e588e217bd36f1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/affa1dba2ecb03f2b4485da567c395ec964eaf": "d60d39fdcc19e2635238067b03d4cdef",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b0/65acea8cfa6f3fece0c015c827b2116c4d52a0": "f3a5b83f9655d38fe2ad29d0cdef7564",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/298f75e20b098e709f1492db11d2b2c0b0c18f": "6f6ceb5726e944e20784bafdea4eb0d8",
".git/objects/bc/1afc20f65648f4437fdf9a11ff3e08d232674c": "48518ac391b9aafa2d7dfb7299687062",
".git/objects/bc/b0f3cf624f19f08a9ccfc186be076206204825": "1b1768f89999d9528f71b2b5863fe38b",
".git/objects/bd/cce44517e134da68c74b8216ef17dc4d6c01b8": "27cda429cdc1413697dc485d7621d3a8",
".git/objects/be/61fc58a28f0ccdb5eef09fa3f4319e2dc2b043": "c23a0dc4d945d42f28115a10524b822e",
".git/objects/c8/6963937fe2e3531a69583e22fe12a6c87fdf21": "87b5f8c9ce0f9d13988b523028a5ab98",
".git/objects/ca/a4f391ac698e5e02057c735f0f6a596b775229": "403e1988a6c6a348d102468e92a3d784",
".git/objects/cc/132d73dbd775ac11f085e0dec1d2e69cafb031": "35b7f43830fe6228d23432668d8745ed",
".git/objects/cc/3b0f5afc46b4221021aca2040d306e1d404869": "aa683d9d3020d4c530aab78cbeb4acb5",
".git/objects/ce/d7d81039810e79b73da663fcfba406cf3c9742": "4b37a807bb694229ca543badfa189537",
".git/objects/cf/0004ec75e705158065c8eb9a6aafe3d3d11188": "bbd48d629e5966da2daa2944a91e14f9",
".git/objects/d0/44b3a8599d8bdfe13080062b01b5c7d7a39afb": "724a5e93cd7c5eb5b7c919c6957d1f41",
".git/objects/d2/f3beb3c637aeab830cd5ab9eb9b70e157bcbe7": "ea63b63257b52670bbae0ec6edd5b628",
".git/objects/d4/a3decb9291854a0838508454451d953627cad9": "009f4fefd79590bb314db6b4c7e14e77",
".git/objects/d6/234fd7f148987c5cc3b3ff0819a489f34b86b8": "81e77c1310df71568c73a7be1c62b791",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d8/797b54355805635f5139554f8b2ab0fc297e59": "cac0cb03c795241929473805871b6210",
".git/objects/e0/6637db0dc57281f97a4d4478e2c819d3e3a619": "a0c5c6a95755513eea6163f98973e3fe",
".git/objects/e0/93ed3cefa188c4860d06b8ae484272b338a9ff": "7712c1db44f960c2a408001161edcf88",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/99bff27be8d01fe839b6328b8328fb5e73e489": "a0d27c2e75074323195c18df9215a035",
".git/objects/e5/a30802bede632aa61bee1eea5418ddc20ec6a1": "d15866f79e369017d0b9701157e2c130",
".git/objects/e7/3d372bfc328217b018ffc0f77df7bd4a78fac5": "34354e7fdf1d2cc2d1e5781511d2345f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e3c8406b2a5bfe47bb1b2514888fcc14d8f176": "69f652b28116c4ca1019762ad475186f",
".git/objects/ee/e0f6ba8288172e2ff73eaecf6a89f4efdadc02": "4371c530893a94950771002cf69a88ab",
".git/objects/ef/22d0abafa2feb4ec2dd1cdc7a62bcdd51a6800": "5b6e246c35c9e5d5e62c739487fe4ffa",
".git/objects/f0/3b3224e040591570f99cb1b6ad134d76be1ebd": "9712ac79ccbd0e6c2c81d2d6b70fcfd5",
".git/objects/f1/66aa771b8d242057f9a63d549ea1c8b261485b": "3e0606f20630507b5dba60ea0deb2564",
".git/objects/f2/fb58b65342f4d7cc206ece240985a6ed51184d": "30554a96bafff2ead4ab35c434d69ac2",
".git/objects/f3/65fa718472a08656ca62f49e5119be95021a9c": "59ec7fa66754b35ef99647d8465b38eb",
".git/objects/f5/0beaeaaa6e005f6b0dcf5c89e11c925ba7cd00": "09f59c424be716427424f1d1a8591f17",
".git/objects/f5/62fe94d115540ad2b7e056cd0e538b82795180": "0bdedfbdd03c1b7907c4924e8c6be582",
".git/objects/fa/ab3dc9a23995df2e17ea1911c5a8d1983c8e2f": "1b1018d63442e9ac4cb7a5b444814923",
".git/objects/ff/292e6cea8d1bd57a274ec35fce44cf978c4d53": "c94ac9e19dbc52184ccd960db60decce",
".git/objects/ff/309d820ffcf4f3a3f95842c0269d270d27a870": "03f7b485b9eff645e51d215b12604425",
".git/refs/heads/main": "8f1359f64aea93fa1c4f2ee22c81d792",
".git/refs/remotes/origin/main": "8f1359f64aea93fa1c4f2ee22c81d792",
"assets/AssetManifest.json": "7540d80797f25141cf59782e6f57b2cd",
"assets/assets/images/plotsklappsLogo.png": "58591c1451d07a2ede3a2d7df4232947",
"assets/assets/images/plotsklappsLogoStacked.png": "1a437b23c9c60239f189614640c74ba4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "131b335123df963cb14702ea86362345",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "589296c9b389fadb5bae418acce8b812",
"/": "589296c9b389fadb5bae418acce8b812",
"main.dart.js": "d88c9f87f09d78da50704ac79b940048",
"manifest.json": "c53bc72e15dd4cfe86c9ebe4528a4468",
"version.json": "980547175e325fe622a3362b84d55b6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
