'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4581744ff015330630ee16a4a7bc0029",
"assets/AssetManifest.bin.json": "507d45240fca066298f5d5b6567f6046",
"assets/AssetManifest.json": "14090cad8dbf9a1dcd888758f873b36a",
"assets/dataset/animals/animals/v10_animal.mp4": "b79f56eb2baa89529128d38e2f1430fc",
"assets/dataset/animals/animals/v11_animal.mp4": "f9ab3601a39a53d8b569b4bbb22c24ad",
"assets/dataset/animals/animals/v12_animal.mp4": "7f088e421ce7f34f6e0489e8714ee44d",
"assets/dataset/animals/animals/v13_animal.mp4": "f8f908d2b5d5eb83674c5278b7d2c1a8",
"assets/dataset/animals/animals/v14_animal.mp4": "67018c92e56adcd6592481743f0e30dd",
"assets/dataset/animals/animals/v15_animal.mp4": "adb832d03a3bfd1d980a86c0daf14063",
"assets/dataset/animals/animals/v16_animal.mp4": "baeffe3af9648e21551c1c3ad5a77c17",
"assets/dataset/animals/animals/v17_animal.mp4": "15e00b849c5f682336cffd722b292276",
"assets/dataset/animals/animals/v18_animal.mp4": "04026486cac02e06365bbba767eaa40f",
"assets/dataset/animals/animals/v19_animal.mp4": "ac441a595cebea41f5dd8f26c01c0b5d",
"assets/dataset/animals/animals/v1_animal.mp4": "febfe8036932263d700249fd30682990",
"assets/dataset/animals/animals/v20_animal.mp4": "fc62348d99852d05c563141c2043380e",
"assets/dataset/animals/animals/v21_animal.mp4": "9a8f691f5c4de59740be0a8b23a698d4",
"assets/dataset/animals/animals/v22_animal.mp4": "689f05e9c7b6e7dbc7455d7dbe4cbd05",
"assets/dataset/animals/animals/v23_animal.mp4": "86a8ecfd10c761822b403d11a721b1ce",
"assets/dataset/animals/animals/v24_animal.mp4": "faa137b935148ca2ad2d98d0a252d05c",
"assets/dataset/animals/animals/v25_animal.mp4": "3253a8d5f0df06fdd605d7e41b92168a",
"assets/dataset/animals/animals/v26_animal.mp4": "942c49c071132b3b97cfba954af9b4b9",
"assets/dataset/animals/animals/v27_animal.mp4": "2c8aee4de9ad62651cf559bc87c7ee15",
"assets/dataset/animals/animals/v28_animal.mp4": "df0533a96a42e4ffea9c6bfbd301cab6",
"assets/dataset/animals/animals/v29_animal.mp4": "5f1967744507e79e3d9755e115efa491",
"assets/dataset/animals/animals/v2_animal.mp4": "429ed8a005b300914949f5adfb36af5b",
"assets/dataset/animals/animals/v30_animal.mp4": "fbb1a66a8a846c12336c916f9295b3f1",
"assets/dataset/animals/animals/v31_animal.mp4": "0b533954ebbcd05bdd785e51970d5358",
"assets/dataset/animals/animals/v32_animal.mp4": "44c9787ef50b900ddeb53aaea4ef5e27",
"assets/dataset/animals/animals/v33_animal.mp4": "dea3dce80e764cfeb917a0307786f461",
"assets/dataset/animals/animals/v34_animal.mp4": "158211a67e2e46f69e20f6cf3ef28315",
"assets/dataset/animals/animals/v35_animal.mp4": "4efb0885a384da8065a5716c6930d0e5",
"assets/dataset/animals/animals/v36_animal.mp4": "0261c0eb5ae45fecfd145e30647716c7",
"assets/dataset/animals/animals/v37_animal.mp4": "7b2ab573740b5bab16a2e4fa3fe9c165",
"assets/dataset/animals/animals/v38_animal.mp4": "404d3da7fd056f15ad2b708ce3118edf",
"assets/dataset/animals/animals/v39_animal.mp4": "5ef109787433effe23ecfe9b4f9036a7",
"assets/dataset/animals/animals/v3_animal.mp4": "2bad068191c7367545bafe0365cea878",
"assets/dataset/animals/animals/v40_animal.mp4": "ae62d91de85c3bf376b7e2750bafb2d5",
"assets/dataset/animals/animals/v41_animal.mp4": "8adf8cd71a16d2048887b4af674956ca",
"assets/dataset/animals/animals/v42_animal.mp4": "50b4b4362313b0536263abd55e55b919",
"assets/dataset/animals/animals/v43_animal.mp4": "a9532ccea532f54deeda453458be302e",
"assets/dataset/animals/animals/v44_animal.mp4": "138486d5848c83586fd16a0f2a9bb554",
"assets/dataset/animals/animals/v45_animal.mp4": "7a1f7e161f17e7b985f14edde22e3426",
"assets/dataset/animals/animals/v46_animal.mp4": "3ab46efaaf31864c8c08a8666781c5c9",
"assets/dataset/animals/animals/v47_animal.mp4": "5e267d4ffe122e089acd94d8e9d9cab7",
"assets/dataset/animals/animals/v48_animal.mp4": "0c636f083ea6aa86a9bfb0f8ee71a2e2",
"assets/dataset/animals/animals/v49_animal.mp4": "16ae447288142ebcc4e6ade027220586",
"assets/dataset/animals/animals/v4_animal.mp4": "e6e0191b8d662889235b34b63e0bb2f4",
"assets/dataset/animals/animals/v50_animal.mp4": "30be9d43ad77206594d11464cb3ed0f3",
"assets/dataset/animals/animals/v5_animal.mp4": "342060c799d11162fbc9ce44502c31bd",
"assets/dataset/animals/animals/v6_animal.mp4": "c383577d5fb943cd6e644374b4331e29",
"assets/dataset/animals/animals/v7_animal.mp4": "a6c5f9deb2c578ada5ac15e8db461618",
"assets/dataset/animals/animals/v8_animal.mp4": "5373c10924e267e14cb5a0c63595fb0d",
"assets/dataset/animals/animals/v9_animal.mp4": "43992087222ff11c7809747564c212c9",
"assets/dataset/flowers/flowers/v10_flower.mp4": "e7f0e00b0ada6f50ba53931299d2444d",
"assets/dataset/flowers/flowers/v11_flower.mp4": "37f5f8ef57080322b093c5ea13cbf1cc",
"assets/dataset/flowers/flowers/v12_flower.mp4": "262c6c18694ca0bd736757715bda5a82",
"assets/dataset/flowers/flowers/v13_flower.mp4": "c33a92e1d1c2108fd681c11c936826f4",
"assets/dataset/flowers/flowers/v14_flower.mp4": "ede9548500155cd2da2161b189534d61",
"assets/dataset/flowers/flowers/v15_flower.mp4": "04c8d197dad52c2b76c8b71b591850f3",
"assets/dataset/flowers/flowers/v16_flower.mp4": "c912c0b1a97d8ceb7f3bb75280fbdb54",
"assets/dataset/flowers/flowers/v17_flower.mp4": "95f47ccaf16dfbfd04fca1f8440eab4f",
"assets/dataset/flowers/flowers/v18_flower.mp4": "a1229b53ee8005270a58f20c48022443",
"assets/dataset/flowers/flowers/v19_flower.mp4": "b2cf16a8a47937472e5e945aa8c9dd15",
"assets/dataset/flowers/flowers/v1_flower.mp4": "d5f7516962fe3c0234136c8875e891ce",
"assets/dataset/flowers/flowers/v20_flower.mp4": "0201eb8509fc51b88ef9762b62498189",
"assets/dataset/flowers/flowers/v21_flower.mp4": "69dc50a673b474e57d387939418d79cd",
"assets/dataset/flowers/flowers/v22_flower.mp4": "ad3b210e3deee15979647e9bcadc77b4",
"assets/dataset/flowers/flowers/v23_flower.mp4": "3ff37721c440a0a917d24c5ff720d786",
"assets/dataset/flowers/flowers/v24_flower.mp4": "cfe72e62b9105d3da9b7dfba7b2dee2b",
"assets/dataset/flowers/flowers/v25_flower.mp4": "eeeed1bd895715707b67fca40325eeb8",
"assets/dataset/flowers/flowers/v26_flower.mp4": "53f82cc6618dfae7a94f80bf83f5d1fd",
"assets/dataset/flowers/flowers/v27_flower.mp4": "aa3481bd9420953cfeea2c343e862487",
"assets/dataset/flowers/flowers/v28_flower.mp4": "aaadb2340e06aa72689e889daa622792",
"assets/dataset/flowers/flowers/v29_flower.mp4": "dc7897afc9c7df38a74ed5de74c93999",
"assets/dataset/flowers/flowers/v2_flower.mp4": "8601f92634df7e68041bad904917bbc9",
"assets/dataset/flowers/flowers/v30_flower.mp4": "83444033e3728a62f812a51d90d861a5",
"assets/dataset/flowers/flowers/v31_flower.mp4": "4db42d5909b63b642021f72d4e266500",
"assets/dataset/flowers/flowers/v32_flower.mp4": "0ea40e91fce1315f4cfb99f0899816f7",
"assets/dataset/flowers/flowers/v33_flower.mp4": "3e2ba20baf31630aa736fe8bf41d8f67",
"assets/dataset/flowers/flowers/v34_flower.mp4": "03107c7a0fed5ee5dd2d92986920d4e5",
"assets/dataset/flowers/flowers/v35_flower.mp4": "e81c2302ca5594a5a8b5d52024532f74",
"assets/dataset/flowers/flowers/v36_flower.mp4": "30b211de249c751840edb35c55d50f40",
"assets/dataset/flowers/flowers/v37_flower.mp4": "99e6557becf352d975b50d7947e6f5d0",
"assets/dataset/flowers/flowers/v38_flower.mp4": "b2f69dd690483e02cec9be46cca0064d",
"assets/dataset/flowers/flowers/v39_flower.mp4": "50c5c44b68c6a473a0e7da65b21d1674",
"assets/dataset/flowers/flowers/v3_flower.mp4": "69194d439b59f1abe2765f500f657586",
"assets/dataset/flowers/flowers/v40_flower.mp4": "72c9cf05714c967c60bb7abf1a0845c7",
"assets/dataset/flowers/flowers/v41_flower.mp4": "5b5a46a174a74aa35c8a74113c3b65d5",
"assets/dataset/flowers/flowers/v42_flower.mp4": "363fb20ad8e75111e0eee3c4d508cd11",
"assets/dataset/flowers/flowers/v43_flower.mp4": "e64912dda81aede2a4b819e6fe74ceb7",
"assets/dataset/flowers/flowers/v44_flower.mp4": "22862c27ab37564619d315eb7c28ec80",
"assets/dataset/flowers/flowers/v45_flower.mp4": "58628f9c6e53d0b9ad6e9c7d7e396d50",
"assets/dataset/flowers/flowers/v46_flower.mp4": "8b918aaa8aba8bdad4513a58e2d3a264",
"assets/dataset/flowers/flowers/v47_flower.mp4": "98f40d848676fc5bdd8e956a5826532e",
"assets/dataset/flowers/flowers/v48_flower.mp4": "216a45e6fa2599afc566703d890d72d7",
"assets/dataset/flowers/flowers/v49_flower.mp4": "36740b3df91644abcaa96cc9ded30718",
"assets/dataset/flowers/flowers/v4_flower.mp4": "ac0f640e82b00f9f1f06edbb431f4968",
"assets/dataset/flowers/flowers/v50_flower.mp4": "c45fdebf8b32335b3225fe57512b0028",
"assets/dataset/flowers/flowers/v5_flower.mp4": "bd87a2776b30d314c0816e867d1af2a4",
"assets/dataset/flowers/flowers/v6_flower.mp4": "9a437ddeb2cae49cda12657de830f0f2",
"assets/dataset/flowers/flowers/v7_flower.mp4": "986d3fe3697042c6be145064f010fd8b",
"assets/dataset/flowers/flowers/v8_flower.mp4": "2ab47e08c78b496c2f916e8e838736d0",
"assets/dataset/flowers/flowers/v9_flower.mp4": "fa44e5b0045bb862a09d2f9eea908583",
"assets/dataset/foods/foods/v10_food.mp4": "cf065dc18ae20c163813355b9a837a3f",
"assets/dataset/foods/foods/v11_food.mp4": "51f4edc2ea46035ee16bb887c97155ae",
"assets/dataset/foods/foods/v12_food.mp4": "b6980ddce1f5c80ca87ab0fea20a8d56",
"assets/dataset/foods/foods/v13_food.mp4": "1bc956e984227602ef3f32c1a273b9be",
"assets/dataset/foods/foods/v14_food.mp4": "50e7722f13046c4676a469f2da69a21b",
"assets/dataset/foods/foods/v15_food.mp4": "8c57e9a1f496b8e6c0fed85cf0de8efd",
"assets/dataset/foods/foods/v16_food.mp4": "13c4cdcb9a96784726df8a5089a567d8",
"assets/dataset/foods/foods/v17_food.mp4": "8086e8b441f3d7319d64dfed6e4185e4",
"assets/dataset/foods/foods/v18_food.mp4": "a027fb4ba583c84b6cb79bf3805de7c8",
"assets/dataset/foods/foods/v19_food.mp4": "09831b7baef507387e1e644e2803d114",
"assets/dataset/foods/foods/v1_food.mp4": "9967bdd012fd40a9fbefe9dccdb5143a",
"assets/dataset/foods/foods/v20_food.mp4": "f27e74bfecf0818edcb2ca342e10a4ca",
"assets/dataset/foods/foods/v21_food.mp4": "8273c4c6cae00e44f4fb0cae40892c5e",
"assets/dataset/foods/foods/v22_food.mp4": "cef32959c54cc3835863035561b31b7c",
"assets/dataset/foods/foods/v23_food.mp4": "c9ff4ae5ac2c1ec86e1e59b54106a661",
"assets/dataset/foods/foods/v24_food.mp4": "5d6552cb6e5beadc3d3a7cbd2de4cdca",
"assets/dataset/foods/foods/v25_food.mp4": "bfdf6c150a12b63704cb345f34b1a8ed",
"assets/dataset/foods/foods/v26_food.mp4": "0b2eaa96fcac8582e9669fc9211d2c7d",
"assets/dataset/foods/foods/v27_food.mp4": "4dc771dce92bb55e064e4906bba2510c",
"assets/dataset/foods/foods/v28_food.mp4": "56d1a54cb1f860e8e9b414463e4faf6e",
"assets/dataset/foods/foods/v29_food.mp4": "6dfd220ea41fe4aac34e19aebe5e0b2e",
"assets/dataset/foods/foods/v2_food.mp4": "17c68e7e04a5b89ff756d72b195033e0",
"assets/dataset/foods/foods/v30_food.mp4": "be557249b51591ba56d561899501656c",
"assets/dataset/foods/foods/v31_food.mp4": "bff769d66505e80efc38e9419580ff12",
"assets/dataset/foods/foods/v32_food.mp4": "8647acc12a18b828fade878c012aedfe",
"assets/dataset/foods/foods/v33_food.mp4": "3fdf2559350bb02c09c29b181c32f20e",
"assets/dataset/foods/foods/v34_food.mp4": "f742ccd1e433cd956396e3274df9d144",
"assets/dataset/foods/foods/v35_food.mp4": "f05332cbd3cb2b213d4d5c8c38179ac1",
"assets/dataset/foods/foods/v36_food.mp4": "c57dd21ca90da1bbee6303bd0a6b1373",
"assets/dataset/foods/foods/v37_food.mp4": "ccfffd658d6889b731581f3eef7bfd59",
"assets/dataset/foods/foods/v38_food.mp4": "de97f0c0317710389ba229e526aaf5c5",
"assets/dataset/foods/foods/v39_food.mp4": "5f02db0dceb25cb2fec9d503ede169f9",
"assets/dataset/foods/foods/v3_food.mp4": "cae679c69a2375a29d0c09c0ec5381ee",
"assets/dataset/foods/foods/v40_food.mp4": "147c59886b047c12ba4e421d55f3d6ad",
"assets/dataset/foods/foods/v41_food.mp4": "d7473159a7060fc392068812ecf155b5",
"assets/dataset/foods/foods/v42_food.mp4": "e246ddd17c3c8d94cb46d2fcc1da21a2",
"assets/dataset/foods/foods/v43_food.mp4": "235e439c6c6445bbbcabb264d2cec3a9",
"assets/dataset/foods/foods/v44_food.mp4": "91e7c0a2f733d9acd7d9c7bfe4e49367",
"assets/dataset/foods/foods/v45_food.mp4": "0d9058e470cb412406f8607586680966",
"assets/dataset/foods/foods/v46_food.mp4": "f05332cbd3cb2b213d4d5c8c38179ac1",
"assets/dataset/foods/foods/v47_food.mp4": "9214ecbed292299b134650be6be9a374",
"assets/dataset/foods/foods/v48_food.mp4": "6c9dcf7f2966968b9c81e2c3c91d7458",
"assets/dataset/foods/foods/v49_food.mp4": "dc5e8f8f3dc59bd5bb829b7e46977426",
"assets/dataset/foods/foods/v4_food.mp4": "83e6209c4684db798d03e059ffa924e4",
"assets/dataset/foods/foods/v50_food.mp4": "81b236ac2e3b4e3be9dc1588688a0bfa",
"assets/dataset/foods/foods/v5_food.mp4": "8100f39a4d738299b9f919450e71897a",
"assets/dataset/foods/foods/v6_food.mp4": "a85f8b91b0d495eb85c178f485fac5c3",
"assets/dataset/foods/foods/v7_food.mp4": "b6b4c9355f922eecfc06afa655f105f8",
"assets/dataset/foods/foods/v8_food.mp4": "42e626c19e23baf5261d29c794d45f38",
"assets/dataset/foods/foods/v9_food.mp4": "9ce85812412e55f73f83e20adcf7f5a1",
"assets/dataset/humans/humans/v10_human.mp4": "f3f5543693c39f7abc47dc7c70d844f6",
"assets/dataset/humans/humans/v11_human.mp4": "212f12f08c5d76a50949110e2e976e69",
"assets/dataset/humans/humans/v12_human.mp4": "c0a7743a90ba85cefeee206484a74428",
"assets/dataset/humans/humans/v13_human.mp4": "0a63ae117bd6fa648be7216e016fec6c",
"assets/dataset/humans/humans/v14_human.mp4": "1db595a5b17697962f462611c055200c",
"assets/dataset/humans/humans/v15_human.mp4": "5a6dd5e875f147bf113c21193a15a734",
"assets/dataset/humans/humans/v16_human.mp4": "cbeb9b69da0ac8acd91b1ba247845870",
"assets/dataset/humans/humans/v17_human.mp4": "c79b19bb056aaec8bdbfbc78274deee4",
"assets/dataset/humans/humans/v18_human.mp4": "6b6c2494c76d24ad36d0e7d41704b741",
"assets/dataset/humans/humans/v19_human.mp4": "dad89c959e2049049e578ff226de6109",
"assets/dataset/humans/humans/v1_human.mp4": "6dd52d49a3df5e100f76eb3490bab3ba",
"assets/dataset/humans/humans/v20_human.mp4": "18650303b945af302b64d180331d8b5a",
"assets/dataset/humans/humans/v21_human.mp4": "172d3bb7ae16f88cce4fabd87340cf19",
"assets/dataset/humans/humans/v22_human.mp4": "adf9093333fa7c9247d3ce32116ceecd",
"assets/dataset/humans/humans/v23_human.mp4": "cf6e9abf3fb31b00eae4b747e2b90e7d",
"assets/dataset/humans/humans/v24_human.mp4": "b1ca98dc2dfdcc0da80fc6f83c415ed9",
"assets/dataset/humans/humans/v25_human.mp4": "b2822030ca070f842a297186c9c7fe71",
"assets/dataset/humans/humans/v26_human.mp4": "08fb704fc3cdeae951c02e524b8dc441",
"assets/dataset/humans/humans/v27_human.mp4": "d6dd4436fbbc52c33fd2fd6b67bfae46",
"assets/dataset/humans/humans/v28_human.mp4": "3bc54883f363da7ecdeb7a84e8726ead",
"assets/dataset/humans/humans/v29_human.mp4": "dd19e1735674de98e0ccd12ef64cefa5",
"assets/dataset/humans/humans/v2_human.mp4": "e59ec3da5f5468070ef40d97b3683679",
"assets/dataset/humans/humans/v30_human.mp4": "74b8850852fab64e4dfc61718a219826",
"assets/dataset/humans/humans/v31_human.mp4": "c289d20bce2a0eef650ad95ed89b2ec3",
"assets/dataset/humans/humans/v32_human.mp4": "da51be02846b0e3bd297c4c8aaed268e",
"assets/dataset/humans/humans/v33_human.mp4": "255efe9f3a6a72093b979559e597e08a",
"assets/dataset/humans/humans/v34_human.mp4": "ffd0d902e2f55ed3c761ed38cac345a5",
"assets/dataset/humans/humans/v35_human.mp4": "eb43651befd24c10ae169196d7e2999e",
"assets/dataset/humans/humans/v36_human.mp4": "61b7f60d60592d74219fcdd1b107d6dd",
"assets/dataset/humans/humans/v37_human.mp4": "531da0ba8930e8ba0eb4c262dd0bf0ca",
"assets/dataset/humans/humans/v38_human.mp4": "b4c995b75f2eaefd66414355f2885aa3",
"assets/dataset/humans/humans/v39_human.mp4": "03f19092051d96322b12e5c0298962d0",
"assets/dataset/humans/humans/v3_human.mp4": "5be9de9ebe873e30cc8833f3946f5ab2",
"assets/dataset/humans/humans/v40_human.mp4": "1fac27e6b7d537d9a62b0228ae907e1f",
"assets/dataset/humans/humans/v41_human.mp4": "4886619a22ba87c9b84c04c272e31941",
"assets/dataset/humans/humans/v42_human.mp4": "9c7eddd4c1a02a833475e1e182c42408",
"assets/dataset/humans/humans/v43_human.mp4": "77d512b02386683b943bd82c0f5f8abe",
"assets/dataset/humans/humans/v44_human.mp4": "95dc41ed6465c2f6f93ea9b576b02a07",
"assets/dataset/humans/humans/v45_human.mp4": "c08c379d25d1af9d97f7a48494ea76d0",
"assets/dataset/humans/humans/v46_human.mp4": "bb40d6d2fd8264219fc277e05f5ccd30",
"assets/dataset/humans/humans/v47_human.mp4": "75341aea4d1eef36dc9925ddde1beca1",
"assets/dataset/humans/humans/v48_human.mp4": "ffb9fd60ca7ab9c9ee4366181e14cc5d",
"assets/dataset/humans/humans/v49_human.mp4": "e73c51204f6c071787bda9fec7994251",
"assets/dataset/humans/humans/v4_human.mp4": "b9a8e3e0607f42ca55321a88c1557ad1",
"assets/dataset/humans/humans/v50_human.mp4": "2077185859306649f3a9967fb2409cb1",
"assets/dataset/humans/humans/v5_human.mp4": "9126ae416d54d5b23bc6f636384636d2",
"assets/dataset/humans/humans/v6_human.mp4": "011f841cb00b2e883ca761aebe969b10",
"assets/dataset/humans/humans/v7_human.mp4": "22297691a2bbec5128af45aef52d25e0",
"assets/dataset/humans/humans/v8_human.mp4": "0d06bab9e970ab6a5ff1942dd35390ca",
"assets/dataset/humans/humans/v9_human.mp4": "222b8215f7c467d98133eac42d635c80",
"assets/dataset/natures/natures/v10_nature.mp4": "70471e4aa285317f2397f59742a31b9f",
"assets/dataset/natures/natures/v11_nature.mp4": "d875af725d65cc0a32aa5ebf616dd98d",
"assets/dataset/natures/natures/v12_nature.mp4": "7acdd2d657a96774c169681097fcae94",
"assets/dataset/natures/natures/v13_nature.mp4": "f4b33635625015cda444250367a45369",
"assets/dataset/natures/natures/v14_nature.mp4": "4bc055ed5b358e54247b20910e01d745",
"assets/dataset/natures/natures/v15_nature.mp4": "d746f4babd4f00699c6516c8286929e2",
"assets/dataset/natures/natures/v16_nature.mp4": "3d58b3c748bf4802b7277ffdcc00c6c3",
"assets/dataset/natures/natures/v17_nature.mp4": "6ede99e193828720101a7ec86850ec23",
"assets/dataset/natures/natures/v18_nature.mp4": "2d9af25c920884a00c4339ee99b80e5b",
"assets/dataset/natures/natures/v19_nature.mp4": "0c34fc694c9ed82c639b08832ca1f83b",
"assets/dataset/natures/natures/v1_nature.mp4": "6dc3731ca85ca0ef148708907e15d5a2",
"assets/dataset/natures/natures/v20_nature.mp4": "fe0963c3408700f9252e496abe6b5027",
"assets/dataset/natures/natures/v21_nature.mp4": "7171fadc2f292e8fff41d79bf56cef1d",
"assets/dataset/natures/natures/v22_nature.mp4": "016b107d791c2afef9a15b042bc200ed",
"assets/dataset/natures/natures/v23_nature.mp4": "a22778681e077f18f9b0edc0446e6653",
"assets/dataset/natures/natures/v24_nature.mp4": "c645b17e2a01bc335b511c59130c73f5",
"assets/dataset/natures/natures/v25_nature.mp4": "fc49870327f2a4beb47db402cc1d8a99",
"assets/dataset/natures/natures/v26_nature.mp4": "38a71525840fc25613fa09f5c0dcc66f",
"assets/dataset/natures/natures/v27_nature.mp4": "90fa6255bce1512865332fdefb4d41e4",
"assets/dataset/natures/natures/v28_nature.mp4": "c543fe99515378187baf9658ad02bf83",
"assets/dataset/natures/natures/v29_nature.mp4": "6fc66e7c2bb735e2172c5b370cfebb87",
"assets/dataset/natures/natures/v2_nature.mp4": "cb07b1adf25c975b84e6a7b851591616",
"assets/dataset/natures/natures/v30_nature.mp4": "7f3bd6e859f33b2cb6a54ac37a859006",
"assets/dataset/natures/natures/v31_nature.mp4": "3f73a6f630d126c4f8cf1f0e388a414d",
"assets/dataset/natures/natures/v32_nature.mp4": "3854c03309595f5a7d21f18c0dcf4cca",
"assets/dataset/natures/natures/v33_nature.mp4": "74929103a698c75f802ec2de054321a3",
"assets/dataset/natures/natures/v34_nature.mp4": "23017d4e281f37c4e2bb593c6f62d981",
"assets/dataset/natures/natures/v35_nature.mp4": "302ab55b66efbff5337d7a9dd8345e84",
"assets/dataset/natures/natures/v36_nature.mp4": "9210ee3718d7972ddaedf08e20573c5b",
"assets/dataset/natures/natures/v37_nature.mp4": "ce1e580042d1781a88909ce1584ed6bd",
"assets/dataset/natures/natures/v38_nature.mp4": "f42ad18fec5ca080f405f2ce564221f1",
"assets/dataset/natures/natures/v39_nature.mp4": "10b0d06dd5f597fd96ddfc5740b8a473",
"assets/dataset/natures/natures/v3_nature.mp4": "a95cbea825dd12439952ed51519a9164",
"assets/dataset/natures/natures/v40_nature.mp4": "a82ce6e1ef776c5c5737aff279870825",
"assets/dataset/natures/natures/v41_nature.mp4": "56424fbd97ebbe3e83738c9697f1c7f0",
"assets/dataset/natures/natures/v42_nature.mp4": "034b489329d05c4926ea2c0e89bdee44",
"assets/dataset/natures/natures/v43_nature.mp4": "0cab5422853132ee104cdae048186c20",
"assets/dataset/natures/natures/v44_nature.mp4": "419e70b19ff6214c54f6e0ab586a4011",
"assets/dataset/natures/natures/v45_nature.mp4": "f1b7c23ebea159ce9e17c6a7c95a98df",
"assets/dataset/natures/natures/v46_nature.mp4": "af4a38395786111c7b0334cdc00ab0c8",
"assets/dataset/natures/natures/v47_nature.mp4": "789307e85548770dd0ece4a38bcbea58",
"assets/dataset/natures/natures/v48_nature.mp4": "509d6d4d7a0e8dad0e710ce6aa61b8c7",
"assets/dataset/natures/natures/v49_nature.mp4": "b4e114e76f326602ea97bb5da41229a0",
"assets/dataset/natures/natures/v4_nature.mp4": "ef9191f2eb1f78ab9ead01e7dda57fe4",
"assets/dataset/natures/natures/v50_nature.mp4": "5d3ba6486bbcea7e2c75c4fca5f5b4ca",
"assets/dataset/natures/natures/v5_nature.mp4": "d0983ace47dc3fe3c72400a874f43c8d",
"assets/dataset/natures/natures/v6_nature.mp4": "31836fa56af4a390492d5a873a2e5b55",
"assets/dataset/natures/natures/v7_nature.mp4": "2d49e1fe4ffc7d6ba01d4f6d601b432b",
"assets/dataset/natures/natures/v8_nature.mp4": "f642600c0245b65ece57865da69c6bc0",
"assets/dataset/natures/natures/v9_nature.mp4": "ad04dc5e6ea9a4887f2c0afc0ce75aac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bc2c70d084acc3782b66616953ae2c1f",
"assets/icons/logo.png": "e9a554fa14b47306193bede11b6a4306",
"assets/icons/pause.png": "b62674cbfc027c1ec874ad116f4efa24",
"assets/icons/photo.png": "9b56b7a86f949b449fc8de7270faca71",
"assets/icons/play.png": "96585a190db68fe31396577786ef174b",
"assets/icons/search.png": "c0705ea27aa48a5e3ba7ba6241363d22",
"assets/icons/vid.png": "fea0933add0f6dc640001b622c7091cf",
"assets/icons/video.png": "eb98219b3d3c6044c69186b4f685fa4a",
"assets/NOTICES": "167b9f8c585e62092bb6e6139aef4d52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/dataset/animals/animals/v10_animal.mp4": "b79f56eb2baa89529128d38e2f1430fc",
"assets/web/assets/dataset/animals/animals/v11_animal.mp4": "f9ab3601a39a53d8b569b4bbb22c24ad",
"assets/web/assets/dataset/animals/animals/v12_animal.mp4": "7f088e421ce7f34f6e0489e8714ee44d",
"assets/web/assets/dataset/animals/animals/v13_animal.mp4": "f8f908d2b5d5eb83674c5278b7d2c1a8",
"assets/web/assets/dataset/animals/animals/v14_animal.mp4": "67018c92e56adcd6592481743f0e30dd",
"assets/web/assets/dataset/animals/animals/v15_animal.mp4": "adb832d03a3bfd1d980a86c0daf14063",
"assets/web/assets/dataset/animals/animals/v16_animal.mp4": "baeffe3af9648e21551c1c3ad5a77c17",
"assets/web/assets/dataset/animals/animals/v17_animal.mp4": "15e00b849c5f682336cffd722b292276",
"assets/web/assets/dataset/animals/animals/v18_animal.mp4": "04026486cac02e06365bbba767eaa40f",
"assets/web/assets/dataset/animals/animals/v19_animal.mp4": "ac441a595cebea41f5dd8f26c01c0b5d",
"assets/web/assets/dataset/animals/animals/v1_animal.mp4": "febfe8036932263d700249fd30682990",
"assets/web/assets/dataset/animals/animals/v20_animal.mp4": "fc62348d99852d05c563141c2043380e",
"assets/web/assets/dataset/animals/animals/v21_animal.mp4": "9a8f691f5c4de59740be0a8b23a698d4",
"assets/web/assets/dataset/animals/animals/v22_animal.mp4": "689f05e9c7b6e7dbc7455d7dbe4cbd05",
"assets/web/assets/dataset/animals/animals/v23_animal.mp4": "86a8ecfd10c761822b403d11a721b1ce",
"assets/web/assets/dataset/animals/animals/v24_animal.mp4": "faa137b935148ca2ad2d98d0a252d05c",
"assets/web/assets/dataset/animals/animals/v25_animal.mp4": "3253a8d5f0df06fdd605d7e41b92168a",
"assets/web/assets/dataset/animals/animals/v26_animal.mp4": "942c49c071132b3b97cfba954af9b4b9",
"assets/web/assets/dataset/animals/animals/v27_animal.mp4": "2c8aee4de9ad62651cf559bc87c7ee15",
"assets/web/assets/dataset/animals/animals/v28_animal.mp4": "df0533a96a42e4ffea9c6bfbd301cab6",
"assets/web/assets/dataset/animals/animals/v29_animal.mp4": "5f1967744507e79e3d9755e115efa491",
"assets/web/assets/dataset/animals/animals/v2_animal.mp4": "429ed8a005b300914949f5adfb36af5b",
"assets/web/assets/dataset/animals/animals/v30_animal.mp4": "fbb1a66a8a846c12336c916f9295b3f1",
"assets/web/assets/dataset/animals/animals/v31_animal.mp4": "0b533954ebbcd05bdd785e51970d5358",
"assets/web/assets/dataset/animals/animals/v32_animal.mp4": "44c9787ef50b900ddeb53aaea4ef5e27",
"assets/web/assets/dataset/animals/animals/v33_animal.mp4": "dea3dce80e764cfeb917a0307786f461",
"assets/web/assets/dataset/animals/animals/v34_animal.mp4": "158211a67e2e46f69e20f6cf3ef28315",
"assets/web/assets/dataset/animals/animals/v35_animal.mp4": "4efb0885a384da8065a5716c6930d0e5",
"assets/web/assets/dataset/animals/animals/v36_animal.mp4": "0261c0eb5ae45fecfd145e30647716c7",
"assets/web/assets/dataset/animals/animals/v37_animal.mp4": "7b2ab573740b5bab16a2e4fa3fe9c165",
"assets/web/assets/dataset/animals/animals/v38_animal.mp4": "404d3da7fd056f15ad2b708ce3118edf",
"assets/web/assets/dataset/animals/animals/v39_animal.mp4": "5ef109787433effe23ecfe9b4f9036a7",
"assets/web/assets/dataset/animals/animals/v3_animal.mp4": "2bad068191c7367545bafe0365cea878",
"assets/web/assets/dataset/animals/animals/v40_animal.mp4": "ae62d91de85c3bf376b7e2750bafb2d5",
"assets/web/assets/dataset/animals/animals/v41_animal.mp4": "8adf8cd71a16d2048887b4af674956ca",
"assets/web/assets/dataset/animals/animals/v42_animal.mp4": "50b4b4362313b0536263abd55e55b919",
"assets/web/assets/dataset/animals/animals/v43_animal.mp4": "a9532ccea532f54deeda453458be302e",
"assets/web/assets/dataset/animals/animals/v44_animal.mp4": "138486d5848c83586fd16a0f2a9bb554",
"assets/web/assets/dataset/animals/animals/v45_animal.mp4": "7a1f7e161f17e7b985f14edde22e3426",
"assets/web/assets/dataset/animals/animals/v46_animal.mp4": "3ab46efaaf31864c8c08a8666781c5c9",
"assets/web/assets/dataset/animals/animals/v47_animal.mp4": "5e267d4ffe122e089acd94d8e9d9cab7",
"assets/web/assets/dataset/animals/animals/v48_animal.mp4": "0c636f083ea6aa86a9bfb0f8ee71a2e2",
"assets/web/assets/dataset/animals/animals/v49_animal.mp4": "16ae447288142ebcc4e6ade027220586",
"assets/web/assets/dataset/animals/animals/v4_animal.mp4": "e6e0191b8d662889235b34b63e0bb2f4",
"assets/web/assets/dataset/animals/animals/v50_animal.mp4": "30be9d43ad77206594d11464cb3ed0f3",
"assets/web/assets/dataset/animals/animals/v5_animal.mp4": "342060c799d11162fbc9ce44502c31bd",
"assets/web/assets/dataset/animals/animals/v6_animal.mp4": "c383577d5fb943cd6e644374b4331e29",
"assets/web/assets/dataset/animals/animals/v7_animal.mp4": "a6c5f9deb2c578ada5ac15e8db461618",
"assets/web/assets/dataset/animals/animals/v8_animal.mp4": "5373c10924e267e14cb5a0c63595fb0d",
"assets/web/assets/dataset/animals/animals/v9_animal.mp4": "43992087222ff11c7809747564c212c9",
"assets/web/assets/dataset/flowers/flowers/v10_flower.mp4": "e7f0e00b0ada6f50ba53931299d2444d",
"assets/web/assets/dataset/flowers/flowers/v11_flower.mp4": "37f5f8ef57080322b093c5ea13cbf1cc",
"assets/web/assets/dataset/flowers/flowers/v12_flower.mp4": "262c6c18694ca0bd736757715bda5a82",
"assets/web/assets/dataset/flowers/flowers/v13_flower.mp4": "c33a92e1d1c2108fd681c11c936826f4",
"assets/web/assets/dataset/flowers/flowers/v14_flower.mp4": "ede9548500155cd2da2161b189534d61",
"assets/web/assets/dataset/flowers/flowers/v15_flower.mp4": "04c8d197dad52c2b76c8b71b591850f3",
"assets/web/assets/dataset/flowers/flowers/v16_flower.mp4": "c912c0b1a97d8ceb7f3bb75280fbdb54",
"assets/web/assets/dataset/flowers/flowers/v17_flower.mp4": "95f47ccaf16dfbfd04fca1f8440eab4f",
"assets/web/assets/dataset/flowers/flowers/v18_flower.mp4": "a1229b53ee8005270a58f20c48022443",
"assets/web/assets/dataset/flowers/flowers/v19_flower.mp4": "b2cf16a8a47937472e5e945aa8c9dd15",
"assets/web/assets/dataset/flowers/flowers/v1_flower.mp4": "d5f7516962fe3c0234136c8875e891ce",
"assets/web/assets/dataset/flowers/flowers/v20_flower.mp4": "0201eb8509fc51b88ef9762b62498189",
"assets/web/assets/dataset/flowers/flowers/v21_flower.mp4": "69dc50a673b474e57d387939418d79cd",
"assets/web/assets/dataset/flowers/flowers/v22_flower.mp4": "ad3b210e3deee15979647e9bcadc77b4",
"assets/web/assets/dataset/flowers/flowers/v23_flower.mp4": "3ff37721c440a0a917d24c5ff720d786",
"assets/web/assets/dataset/flowers/flowers/v24_flower.mp4": "cfe72e62b9105d3da9b7dfba7b2dee2b",
"assets/web/assets/dataset/flowers/flowers/v25_flower.mp4": "eeeed1bd895715707b67fca40325eeb8",
"assets/web/assets/dataset/flowers/flowers/v26_flower.mp4": "53f82cc6618dfae7a94f80bf83f5d1fd",
"assets/web/assets/dataset/flowers/flowers/v27_flower.mp4": "aa3481bd9420953cfeea2c343e862487",
"assets/web/assets/dataset/flowers/flowers/v28_flower.mp4": "aaadb2340e06aa72689e889daa622792",
"assets/web/assets/dataset/flowers/flowers/v29_flower.mp4": "dc7897afc9c7df38a74ed5de74c93999",
"assets/web/assets/dataset/flowers/flowers/v2_flower.mp4": "8601f92634df7e68041bad904917bbc9",
"assets/web/assets/dataset/flowers/flowers/v30_flower.mp4": "83444033e3728a62f812a51d90d861a5",
"assets/web/assets/dataset/flowers/flowers/v31_flower.mp4": "4db42d5909b63b642021f72d4e266500",
"assets/web/assets/dataset/flowers/flowers/v32_flower.mp4": "0ea40e91fce1315f4cfb99f0899816f7",
"assets/web/assets/dataset/flowers/flowers/v33_flower.mp4": "3e2ba20baf31630aa736fe8bf41d8f67",
"assets/web/assets/dataset/flowers/flowers/v34_flower.mp4": "03107c7a0fed5ee5dd2d92986920d4e5",
"assets/web/assets/dataset/flowers/flowers/v35_flower.mp4": "e81c2302ca5594a5a8b5d52024532f74",
"assets/web/assets/dataset/flowers/flowers/v36_flower.mp4": "30b211de249c751840edb35c55d50f40",
"assets/web/assets/dataset/flowers/flowers/v37_flower.mp4": "99e6557becf352d975b50d7947e6f5d0",
"assets/web/assets/dataset/flowers/flowers/v38_flower.mp4": "b2f69dd690483e02cec9be46cca0064d",
"assets/web/assets/dataset/flowers/flowers/v39_flower.mp4": "50c5c44b68c6a473a0e7da65b21d1674",
"assets/web/assets/dataset/flowers/flowers/v3_flower.mp4": "69194d439b59f1abe2765f500f657586",
"assets/web/assets/dataset/flowers/flowers/v40_flower.mp4": "72c9cf05714c967c60bb7abf1a0845c7",
"assets/web/assets/dataset/flowers/flowers/v41_flower.mp4": "5b5a46a174a74aa35c8a74113c3b65d5",
"assets/web/assets/dataset/flowers/flowers/v42_flower.mp4": "363fb20ad8e75111e0eee3c4d508cd11",
"assets/web/assets/dataset/flowers/flowers/v43_flower.mp4": "e64912dda81aede2a4b819e6fe74ceb7",
"assets/web/assets/dataset/flowers/flowers/v44_flower.mp4": "22862c27ab37564619d315eb7c28ec80",
"assets/web/assets/dataset/flowers/flowers/v45_flower.mp4": "58628f9c6e53d0b9ad6e9c7d7e396d50",
"assets/web/assets/dataset/flowers/flowers/v46_flower.mp4": "8b918aaa8aba8bdad4513a58e2d3a264",
"assets/web/assets/dataset/flowers/flowers/v47_flower.mp4": "98f40d848676fc5bdd8e956a5826532e",
"assets/web/assets/dataset/flowers/flowers/v48_flower.mp4": "216a45e6fa2599afc566703d890d72d7",
"assets/web/assets/dataset/flowers/flowers/v49_flower.mp4": "36740b3df91644abcaa96cc9ded30718",
"assets/web/assets/dataset/flowers/flowers/v4_flower.mp4": "ac0f640e82b00f9f1f06edbb431f4968",
"assets/web/assets/dataset/flowers/flowers/v50_flower.mp4": "c45fdebf8b32335b3225fe57512b0028",
"assets/web/assets/dataset/flowers/flowers/v5_flower.mp4": "bd87a2776b30d314c0816e867d1af2a4",
"assets/web/assets/dataset/flowers/flowers/v6_flower.mp4": "9a437ddeb2cae49cda12657de830f0f2",
"assets/web/assets/dataset/flowers/flowers/v7_flower.mp4": "986d3fe3697042c6be145064f010fd8b",
"assets/web/assets/dataset/flowers/flowers/v8_flower.mp4": "2ab47e08c78b496c2f916e8e838736d0",
"assets/web/assets/dataset/flowers/flowers/v9_flower.mp4": "fa44e5b0045bb862a09d2f9eea908583",
"assets/web/assets/dataset/foods/foods/v10_food.mp4": "cf065dc18ae20c163813355b9a837a3f",
"assets/web/assets/dataset/foods/foods/v11_food.mp4": "51f4edc2ea46035ee16bb887c97155ae",
"assets/web/assets/dataset/foods/foods/v12_food.mp4": "b6980ddce1f5c80ca87ab0fea20a8d56",
"assets/web/assets/dataset/foods/foods/v13_food.mp4": "1bc956e984227602ef3f32c1a273b9be",
"assets/web/assets/dataset/foods/foods/v14_food.mp4": "50e7722f13046c4676a469f2da69a21b",
"assets/web/assets/dataset/foods/foods/v15_food.mp4": "8c57e9a1f496b8e6c0fed85cf0de8efd",
"assets/web/assets/dataset/foods/foods/v16_food.mp4": "13c4cdcb9a96784726df8a5089a567d8",
"assets/web/assets/dataset/foods/foods/v17_food.mp4": "8086e8b441f3d7319d64dfed6e4185e4",
"assets/web/assets/dataset/foods/foods/v18_food.mp4": "a027fb4ba583c84b6cb79bf3805de7c8",
"assets/web/assets/dataset/foods/foods/v19_food.mp4": "09831b7baef507387e1e644e2803d114",
"assets/web/assets/dataset/foods/foods/v1_food.mp4": "9967bdd012fd40a9fbefe9dccdb5143a",
"assets/web/assets/dataset/foods/foods/v20_food.mp4": "f27e74bfecf0818edcb2ca342e10a4ca",
"assets/web/assets/dataset/foods/foods/v21_food.mp4": "8273c4c6cae00e44f4fb0cae40892c5e",
"assets/web/assets/dataset/foods/foods/v22_food.mp4": "cef32959c54cc3835863035561b31b7c",
"assets/web/assets/dataset/foods/foods/v23_food.mp4": "c9ff4ae5ac2c1ec86e1e59b54106a661",
"assets/web/assets/dataset/foods/foods/v24_food.mp4": "5d6552cb6e5beadc3d3a7cbd2de4cdca",
"assets/web/assets/dataset/foods/foods/v25_food.mp4": "bfdf6c150a12b63704cb345f34b1a8ed",
"assets/web/assets/dataset/foods/foods/v26_food.mp4": "0b2eaa96fcac8582e9669fc9211d2c7d",
"assets/web/assets/dataset/foods/foods/v27_food.mp4": "4dc771dce92bb55e064e4906bba2510c",
"assets/web/assets/dataset/foods/foods/v28_food.mp4": "56d1a54cb1f860e8e9b414463e4faf6e",
"assets/web/assets/dataset/foods/foods/v29_food.mp4": "6dfd220ea41fe4aac34e19aebe5e0b2e",
"assets/web/assets/dataset/foods/foods/v2_food.mp4": "17c68e7e04a5b89ff756d72b195033e0",
"assets/web/assets/dataset/foods/foods/v30_food.mp4": "be557249b51591ba56d561899501656c",
"assets/web/assets/dataset/foods/foods/v31_food.mp4": "bff769d66505e80efc38e9419580ff12",
"assets/web/assets/dataset/foods/foods/v32_food.mp4": "8647acc12a18b828fade878c012aedfe",
"assets/web/assets/dataset/foods/foods/v33_food.mp4": "3fdf2559350bb02c09c29b181c32f20e",
"assets/web/assets/dataset/foods/foods/v34_food.mp4": "f742ccd1e433cd956396e3274df9d144",
"assets/web/assets/dataset/foods/foods/v35_food.mp4": "f05332cbd3cb2b213d4d5c8c38179ac1",
"assets/web/assets/dataset/foods/foods/v36_food.mp4": "c57dd21ca90da1bbee6303bd0a6b1373",
"assets/web/assets/dataset/foods/foods/v37_food.mp4": "ccfffd658d6889b731581f3eef7bfd59",
"assets/web/assets/dataset/foods/foods/v38_food.mp4": "de97f0c0317710389ba229e526aaf5c5",
"assets/web/assets/dataset/foods/foods/v39_food.mp4": "5f02db0dceb25cb2fec9d503ede169f9",
"assets/web/assets/dataset/foods/foods/v3_food.mp4": "cae679c69a2375a29d0c09c0ec5381ee",
"assets/web/assets/dataset/foods/foods/v40_food.mp4": "147c59886b047c12ba4e421d55f3d6ad",
"assets/web/assets/dataset/foods/foods/v41_food.mp4": "d7473159a7060fc392068812ecf155b5",
"assets/web/assets/dataset/foods/foods/v42_food.mp4": "e246ddd17c3c8d94cb46d2fcc1da21a2",
"assets/web/assets/dataset/foods/foods/v43_food.mp4": "235e439c6c6445bbbcabb264d2cec3a9",
"assets/web/assets/dataset/foods/foods/v44_food.mp4": "91e7c0a2f733d9acd7d9c7bfe4e49367",
"assets/web/assets/dataset/foods/foods/v45_food.mp4": "0d9058e470cb412406f8607586680966",
"assets/web/assets/dataset/foods/foods/v46_food.mp4": "f05332cbd3cb2b213d4d5c8c38179ac1",
"assets/web/assets/dataset/foods/foods/v47_food.mp4": "9214ecbed292299b134650be6be9a374",
"assets/web/assets/dataset/foods/foods/v48_food.mp4": "6c9dcf7f2966968b9c81e2c3c91d7458",
"assets/web/assets/dataset/foods/foods/v49_food.mp4": "dc5e8f8f3dc59bd5bb829b7e46977426",
"assets/web/assets/dataset/foods/foods/v4_food.mp4": "83e6209c4684db798d03e059ffa924e4",
"assets/web/assets/dataset/foods/foods/v50_food.mp4": "81b236ac2e3b4e3be9dc1588688a0bfa",
"assets/web/assets/dataset/foods/foods/v5_food.mp4": "8100f39a4d738299b9f919450e71897a",
"assets/web/assets/dataset/foods/foods/v6_food.mp4": "a85f8b91b0d495eb85c178f485fac5c3",
"assets/web/assets/dataset/foods/foods/v7_food.mp4": "b6b4c9355f922eecfc06afa655f105f8",
"assets/web/assets/dataset/foods/foods/v8_food.mp4": "42e626c19e23baf5261d29c794d45f38",
"assets/web/assets/dataset/foods/foods/v9_food.mp4": "9ce85812412e55f73f83e20adcf7f5a1",
"assets/web/assets/dataset/humans/humans/v10_human.mp4": "f3f5543693c39f7abc47dc7c70d844f6",
"assets/web/assets/dataset/humans/humans/v11_human.mp4": "212f12f08c5d76a50949110e2e976e69",
"assets/web/assets/dataset/humans/humans/v12_human.mp4": "c0a7743a90ba85cefeee206484a74428",
"assets/web/assets/dataset/humans/humans/v13_human.mp4": "0a63ae117bd6fa648be7216e016fec6c",
"assets/web/assets/dataset/humans/humans/v14_human.mp4": "1db595a5b17697962f462611c055200c",
"assets/web/assets/dataset/humans/humans/v15_human.mp4": "5a6dd5e875f147bf113c21193a15a734",
"assets/web/assets/dataset/humans/humans/v16_human.mp4": "cbeb9b69da0ac8acd91b1ba247845870",
"assets/web/assets/dataset/humans/humans/v17_human.mp4": "c79b19bb056aaec8bdbfbc78274deee4",
"assets/web/assets/dataset/humans/humans/v18_human.mp4": "6b6c2494c76d24ad36d0e7d41704b741",
"assets/web/assets/dataset/humans/humans/v19_human.mp4": "dad89c959e2049049e578ff226de6109",
"assets/web/assets/dataset/humans/humans/v1_human.mp4": "6dd52d49a3df5e100f76eb3490bab3ba",
"assets/web/assets/dataset/humans/humans/v20_human.mp4": "18650303b945af302b64d180331d8b5a",
"assets/web/assets/dataset/humans/humans/v21_human.mp4": "172d3bb7ae16f88cce4fabd87340cf19",
"assets/web/assets/dataset/humans/humans/v22_human.mp4": "adf9093333fa7c9247d3ce32116ceecd",
"assets/web/assets/dataset/humans/humans/v23_human.mp4": "cf6e9abf3fb31b00eae4b747e2b90e7d",
"assets/web/assets/dataset/humans/humans/v24_human.mp4": "b1ca98dc2dfdcc0da80fc6f83c415ed9",
"assets/web/assets/dataset/humans/humans/v25_human.mp4": "b2822030ca070f842a297186c9c7fe71",
"assets/web/assets/dataset/humans/humans/v26_human.mp4": "08fb704fc3cdeae951c02e524b8dc441",
"assets/web/assets/dataset/humans/humans/v27_human.mp4": "d6dd4436fbbc52c33fd2fd6b67bfae46",
"assets/web/assets/dataset/humans/humans/v28_human.mp4": "3bc54883f363da7ecdeb7a84e8726ead",
"assets/web/assets/dataset/humans/humans/v29_human.mp4": "dd19e1735674de98e0ccd12ef64cefa5",
"assets/web/assets/dataset/humans/humans/v2_human.mp4": "e59ec3da5f5468070ef40d97b3683679",
"assets/web/assets/dataset/humans/humans/v30_human.mp4": "74b8850852fab64e4dfc61718a219826",
"assets/web/assets/dataset/humans/humans/v31_human.mp4": "c289d20bce2a0eef650ad95ed89b2ec3",
"assets/web/assets/dataset/humans/humans/v32_human.mp4": "da51be02846b0e3bd297c4c8aaed268e",
"assets/web/assets/dataset/humans/humans/v33_human.mp4": "255efe9f3a6a72093b979559e597e08a",
"assets/web/assets/dataset/humans/humans/v34_human.mp4": "ffd0d902e2f55ed3c761ed38cac345a5",
"assets/web/assets/dataset/humans/humans/v35_human.mp4": "eb43651befd24c10ae169196d7e2999e",
"assets/web/assets/dataset/humans/humans/v36_human.mp4": "61b7f60d60592d74219fcdd1b107d6dd",
"assets/web/assets/dataset/humans/humans/v37_human.mp4": "531da0ba8930e8ba0eb4c262dd0bf0ca",
"assets/web/assets/dataset/humans/humans/v38_human.mp4": "b4c995b75f2eaefd66414355f2885aa3",
"assets/web/assets/dataset/humans/humans/v39_human.mp4": "03f19092051d96322b12e5c0298962d0",
"assets/web/assets/dataset/humans/humans/v3_human.mp4": "5be9de9ebe873e30cc8833f3946f5ab2",
"assets/web/assets/dataset/humans/humans/v40_human.mp4": "1fac27e6b7d537d9a62b0228ae907e1f",
"assets/web/assets/dataset/humans/humans/v41_human.mp4": "4886619a22ba87c9b84c04c272e31941",
"assets/web/assets/dataset/humans/humans/v42_human.mp4": "9c7eddd4c1a02a833475e1e182c42408",
"assets/web/assets/dataset/humans/humans/v43_human.mp4": "77d512b02386683b943bd82c0f5f8abe",
"assets/web/assets/dataset/humans/humans/v44_human.mp4": "95dc41ed6465c2f6f93ea9b576b02a07",
"assets/web/assets/dataset/humans/humans/v45_human.mp4": "c08c379d25d1af9d97f7a48494ea76d0",
"assets/web/assets/dataset/humans/humans/v46_human.mp4": "bb40d6d2fd8264219fc277e05f5ccd30",
"assets/web/assets/dataset/humans/humans/v47_human.mp4": "75341aea4d1eef36dc9925ddde1beca1",
"assets/web/assets/dataset/humans/humans/v48_human.mp4": "ffb9fd60ca7ab9c9ee4366181e14cc5d",
"assets/web/assets/dataset/humans/humans/v49_human.mp4": "e73c51204f6c071787bda9fec7994251",
"assets/web/assets/dataset/humans/humans/v4_human.mp4": "b9a8e3e0607f42ca55321a88c1557ad1",
"assets/web/assets/dataset/humans/humans/v50_human.mp4": "2077185859306649f3a9967fb2409cb1",
"assets/web/assets/dataset/humans/humans/v5_human.mp4": "9126ae416d54d5b23bc6f636384636d2",
"assets/web/assets/dataset/humans/humans/v6_human.mp4": "011f841cb00b2e883ca761aebe969b10",
"assets/web/assets/dataset/humans/humans/v7_human.mp4": "22297691a2bbec5128af45aef52d25e0",
"assets/web/assets/dataset/humans/humans/v8_human.mp4": "0d06bab9e970ab6a5ff1942dd35390ca",
"assets/web/assets/dataset/humans/humans/v9_human.mp4": "222b8215f7c467d98133eac42d635c80",
"assets/web/assets/dataset/natures/natures/v10_nature.mp4": "70471e4aa285317f2397f59742a31b9f",
"assets/web/assets/dataset/natures/natures/v11_nature.mp4": "d875af725d65cc0a32aa5ebf616dd98d",
"assets/web/assets/dataset/natures/natures/v12_nature.mp4": "7acdd2d657a96774c169681097fcae94",
"assets/web/assets/dataset/natures/natures/v13_nature.mp4": "f4b33635625015cda444250367a45369",
"assets/web/assets/dataset/natures/natures/v14_nature.mp4": "4bc055ed5b358e54247b20910e01d745",
"assets/web/assets/dataset/natures/natures/v15_nature.mp4": "d746f4babd4f00699c6516c8286929e2",
"assets/web/assets/dataset/natures/natures/v16_nature.mp4": "3d58b3c748bf4802b7277ffdcc00c6c3",
"assets/web/assets/dataset/natures/natures/v17_nature.mp4": "6ede99e193828720101a7ec86850ec23",
"assets/web/assets/dataset/natures/natures/v18_nature.mp4": "2d9af25c920884a00c4339ee99b80e5b",
"assets/web/assets/dataset/natures/natures/v19_nature.mp4": "0c34fc694c9ed82c639b08832ca1f83b",
"assets/web/assets/dataset/natures/natures/v1_nature.mp4": "6dc3731ca85ca0ef148708907e15d5a2",
"assets/web/assets/dataset/natures/natures/v20_nature.mp4": "fe0963c3408700f9252e496abe6b5027",
"assets/web/assets/dataset/natures/natures/v21_nature.mp4": "7171fadc2f292e8fff41d79bf56cef1d",
"assets/web/assets/dataset/natures/natures/v22_nature.mp4": "016b107d791c2afef9a15b042bc200ed",
"assets/web/assets/dataset/natures/natures/v23_nature.mp4": "a22778681e077f18f9b0edc0446e6653",
"assets/web/assets/dataset/natures/natures/v24_nature.mp4": "c645b17e2a01bc335b511c59130c73f5",
"assets/web/assets/dataset/natures/natures/v25_nature.mp4": "fc49870327f2a4beb47db402cc1d8a99",
"assets/web/assets/dataset/natures/natures/v26_nature.mp4": "38a71525840fc25613fa09f5c0dcc66f",
"assets/web/assets/dataset/natures/natures/v27_nature.mp4": "90fa6255bce1512865332fdefb4d41e4",
"assets/web/assets/dataset/natures/natures/v28_nature.mp4": "c543fe99515378187baf9658ad02bf83",
"assets/web/assets/dataset/natures/natures/v29_nature.mp4": "6fc66e7c2bb735e2172c5b370cfebb87",
"assets/web/assets/dataset/natures/natures/v2_nature.mp4": "cb07b1adf25c975b84e6a7b851591616",
"assets/web/assets/dataset/natures/natures/v30_nature.mp4": "7f3bd6e859f33b2cb6a54ac37a859006",
"assets/web/assets/dataset/natures/natures/v31_nature.mp4": "3f73a6f630d126c4f8cf1f0e388a414d",
"assets/web/assets/dataset/natures/natures/v32_nature.mp4": "3854c03309595f5a7d21f18c0dcf4cca",
"assets/web/assets/dataset/natures/natures/v33_nature.mp4": "74929103a698c75f802ec2de054321a3",
"assets/web/assets/dataset/natures/natures/v34_nature.mp4": "23017d4e281f37c4e2bb593c6f62d981",
"assets/web/assets/dataset/natures/natures/v35_nature.mp4": "302ab55b66efbff5337d7a9dd8345e84",
"assets/web/assets/dataset/natures/natures/v36_nature.mp4": "9210ee3718d7972ddaedf08e20573c5b",
"assets/web/assets/dataset/natures/natures/v37_nature.mp4": "ce1e580042d1781a88909ce1584ed6bd",
"assets/web/assets/dataset/natures/natures/v38_nature.mp4": "f42ad18fec5ca080f405f2ce564221f1",
"assets/web/assets/dataset/natures/natures/v39_nature.mp4": "10b0d06dd5f597fd96ddfc5740b8a473",
"assets/web/assets/dataset/natures/natures/v3_nature.mp4": "a95cbea825dd12439952ed51519a9164",
"assets/web/assets/dataset/natures/natures/v40_nature.mp4": "a82ce6e1ef776c5c5737aff279870825",
"assets/web/assets/dataset/natures/natures/v41_nature.mp4": "56424fbd97ebbe3e83738c9697f1c7f0",
"assets/web/assets/dataset/natures/natures/v42_nature.mp4": "034b489329d05c4926ea2c0e89bdee44",
"assets/web/assets/dataset/natures/natures/v43_nature.mp4": "0cab5422853132ee104cdae048186c20",
"assets/web/assets/dataset/natures/natures/v44_nature.mp4": "419e70b19ff6214c54f6e0ab586a4011",
"assets/web/assets/dataset/natures/natures/v45_nature.mp4": "f1b7c23ebea159ce9e17c6a7c95a98df",
"assets/web/assets/dataset/natures/natures/v46_nature.mp4": "af4a38395786111c7b0334cdc00ab0c8",
"assets/web/assets/dataset/natures/natures/v47_nature.mp4": "789307e85548770dd0ece4a38bcbea58",
"assets/web/assets/dataset/natures/natures/v48_nature.mp4": "509d6d4d7a0e8dad0e710ce6aa61b8c7",
"assets/web/assets/dataset/natures/natures/v49_nature.mp4": "b4e114e76f326602ea97bb5da41229a0",
"assets/web/assets/dataset/natures/natures/v4_nature.mp4": "ef9191f2eb1f78ab9ead01e7dda57fe4",
"assets/web/assets/dataset/natures/natures/v50_nature.mp4": "5d3ba6486bbcea7e2c75c4fca5f5b4ca",
"assets/web/assets/dataset/natures/natures/v5_nature.mp4": "d0983ace47dc3fe3c72400a874f43c8d",
"assets/web/assets/dataset/natures/natures/v6_nature.mp4": "31836fa56af4a390492d5a873a2e5b55",
"assets/web/assets/dataset/natures/natures/v7_nature.mp4": "2d49e1fe4ffc7d6ba01d4f6d601b432b",
"assets/web/assets/dataset/natures/natures/v8_nature.mp4": "f642600c0245b65ece57865da69c6bc0",
"assets/web/assets/dataset/natures/natures/v9_nature.mp4": "ad04dc5e6ea9a4887f2c0afc0ce75aac",
"assets/web/assets/icons/logo.png": "e9a554fa14b47306193bede11b6a4306",
"assets/web/assets/icons/pause.png": "b62674cbfc027c1ec874ad116f4efa24",
"assets/web/assets/icons/photo.png": "9b56b7a86f949b449fc8de7270faca71",
"assets/web/assets/icons/play.png": "96585a190db68fe31396577786ef174b",
"assets/web/assets/icons/search.png": "c0705ea27aa48a5e3ba7ba6241363d22",
"assets/web/assets/icons/vid.png": "fea0933add0f6dc640001b622c7091cf",
"assets/web/assets/icons/video.png": "eb98219b3d3c6044c69186b4f685fa4a",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "ff84440d75be0931906d248a05b14059",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c8b9f5095569aa12ea73dbe9295d71b9",
"/": "c8b9f5095569aa12ea73dbe9295d71b9",
"main.dart.js": "7e41d208962f3f6dd4d4ae5411897620",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"version.json": "b3b87f9153d4406c14bc11865bbe1089"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
