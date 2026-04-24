const hospitals = [
  {
    id: "bvdkhanoi",
    type: "hospital",
    name: "Bệnh Viện Đa Khoa Hà Nội",
    address: "Số 29 Hàn Thuyên, Hai Bà Trưng, Hà Nội",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/b2b6c6f5-2b71-4cdc-907e-b9b488a337d6-bv_djk_ha_noi_1.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/6313ae88-6d66-49fb-bee5-2a8316361e00-bv_djk_ha_noi_1.png",
    ctas: null,
  },
  {
    id: "pktmhkidfc2",
    type: "hospital",
    name: "Phòng Khám Tai Mũi Họng Người Lớn và Trẻ Em KID & FAMILY CARE - Chi Nhánh 2",
    address:
      "S5.02 The Rainbow - Vinhomes Grand Park, Phường Long Thạnh Mỹ, TP.Thủ Đức",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/2bc2f8de-668e-40f6-8b39-bb1d1bd3da60-z5104075068912_76032da2a3f2dbd281d858cf27c03377.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/3f3d7d06-9967-408f-ac81-4abf96ca24cf-z5104075068912_76032da2a3f2dbd281d858cf27c03377.jpg",
    ctas: null,
  },
  {
    id: "drcheck",
    type: "hospital",
    name: "Trung Tâm Nội Soi Tiêu Hoá Doctor Check",
    address: " 429 Tô Hiến Thành, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/4db1fb51-2669-492f-b3d7-f08005451770-mark_dc-removebg-preview.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/3170b63a-b223-4599-a389-aa250ea7d464-mark_dc-removebg-preview.png",
    ctas: null,
  },
  {
    id: "ttnamviet",
    type: "hospital",
    name: "Trung Tâm Mắt Kỹ Thuật Cao Nam Việt",
    address:
      "18 - 20 Phước Hưng, Phường An Đông, Thành phố Hồ Chí Minh (Địa chỉ cũ: 18 - 20 Phước Hưng, Phường 8, Quận 5, TP.HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/ecda04b6-d646-4257-81be-4df38eafabd9-logo_nam_viet.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/53ca6503-cf2f-47cb-8155-0521da9851f7-logo_nam_viet.png",
    ctas: null,
  },
  {
    id: "diag009",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 12",
    address:
      "7 ( số cũ 4/1) Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/f3074fd7-822a-40b0-96f2-2b45d2169638-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/51decccd-42c6-4118-8f69-f4db3067ec18-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "medlatecbp",
    type: "hospital",
    name: "Trung tâm xét nghiệm Medlatec Bình Phước",
    address:
      "999 Phú Riềng Đỏ,Tân Bình, TP Đồng Xoài, Bình Phước (Cạnh siêu thị Coop's Mart Đồng Xoài)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/0652e29e-404f-4a38-a6c7-a2158e6affb2-medlatec.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/dd7c869b-f573-4b15-b148-fe82732aa5bc-medlatec.jpg",
    ctas: null,
  },
  {
    id: "1564",
    type: "hospital",
    name: "Phòng Khám Đa Khoa MediHouse",
    address: "94 An Bình , Phường 5 , Quận 5 , TP Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/2103db51-92f5-4465-9ec4-38154535f1b7-z5267140127276_12f2834294a43b849417729ed5fecd99.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/36e79eb9-0224-4304-9c91-11183b94ec1c-z5267140127276_12f2834294a43b849417729ed5fecd99.jpg",
    ctas: null,
  },
  {
    id: "diag014",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Thủ Dầu Một",
    address:
      "495 Cách Mạng Tháng 8, Phường Phú Cường, Thành phố Thủ Dầu Một, Tỉnh Bình Dương",
    image:
      "https://cdn.medpro.vn/prod-partner/c073c050-9d49-43c9-959d-6de7e0b0d0a2-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/63f6d817-d430-4702-bcac-b2a9d4f229c5-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "binhthanhhcm",
    type: "hospital",
    name: "Bệnh Viện Đa Khoa Bình Thạnh",
    address:
      "132 Lê Văn Duyệt, Phường Gia Định, TP.Hồ Chí Minh (Địa chỉ cũ: 132 Lê Văn Duyệt, Phường 1, Bình Thạnh, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/b8b5f00a-925c-4fed-b0a6-9b0d11fb25c6-layer_1_(3).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/19d40bc0-bede-457b-8858-5d8d06cd9a4d-layer_1_(3).png",
    ctas: null,
  },
  {
    id: "minhanh",
    type: "hospital",
    name: "Bệnh viện Quốc tế Minh Anh",
    address:
      "36 Đường số 1B, Phường An Lạc, TP.Hồ Chí Minh (Địa chỉ cũ: 36 Đường số 1B, Phường Bình Trị Đông, Quận Bình Tân, TP.HCM)",
    image: "https://api-v2.medpro.com.vn:5000/st/hospitals/minhanh-logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/e40fe582-fec2-44bc-9efe-dbf2d009c8eb-minhanh-logo.png",
    ctas: null,
  },
  {
    id: "umc3",
    type: "hospital",
    name: "Bệnh viện Đại học Y Dược TP.HCM (Y học cổ truyền kết hợp y học hiện đại)",
    address:
      "CS3: 221B Hoàng Văn Thụ, Phường Phú Nhuận, TP.HCM (Địa chỉ cũ: 221B Hoàng Văn Thụ, Phường 8, Quận Phú Nhuận, TP. Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/b55d8e1c-4ca9-41f1-9827-c2574a188ffa-logo_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/b8973e60-57bf-419d-96b4-5fdbf2102a6d-logo_(1).png",
    ctas: null,
  },
  {
    id: "bvmathcm",
    type: "hospital",
    name: "Bệnh Viện Mắt",
    address:
      "280 Điện Biên Phủ, phường Xuân Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: 280 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/bvmathcm/web/logo.png?t=11",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/bvmathcm/web/logo.png?t=11",
    ctas: null,
  },
  {
    id: "diag015",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Biên Hòa",
    address:
      "139 - 141 (Số cũ F240 - 241) Võ Thị Sáu, Khu phố 7, Phường Thống Nhất, TP. Biên Hòa, Tỉnh Đồng Nai",
    image:
      "https://cdn.medpro.vn/prod-partner/ec35d117-040c-4f95-a091-dc0ee378497f-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/6a3b3708-c21a-4862-8c91-25cdd17ee477-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "bvquan12",
    type: "hospital",
    name: "Bệnh viện Đa Khoa Trung Mỹ Tây",
    address:
      "111 Dương Thị Mười, Phường Trung Mỹ Tây, TP.HCM (Địa chỉ cũ: 111 Dương Thị Mười, phường Tân Chánh Hiệp, Quận 12)",
    image:
      "https://cdn.medpro.vn/prod-partner/36b3af6f-fd82-4046-bf91-ef9fd68ab4e3-z6928458371135_df6b2b0e97d37bcc611e1c2c535ccb15.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/f9c0bcf0-dbce-4b81-a966-f0a785a90521-z6928458371135_df6b2b0e97d37bcc611e1c2c535ccb15.jpg",
    ctas: null,
  },
  {
    id: "bvdkcantho",
    type: "hospital",
    name: "Bệnh viện Đa khoa Thành phố Cần Thơ",
    address:
      "04 Châu Văn Liêm, Phường Ninh Kiều, Thành phố Cần Thơ (Địa chỉ cũ: 04 Châu Văn Liêm, Phường Tân An, Quận Ninh Kiều, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/5a2117f1-561f-4b73-8360-f8b946d6e243-logo.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/a5ce4c68-5edb-46d8-bef9-267b78515fe7-logo.jpg",
    ctas: null,
  },
  {
    id: "bvnthcm",
    type: "hospital",
    name: "Bệnh viện Nguyễn Trãi",
    address:
      "314 Nguyễn Trãi, Phường An Đông, TP.Hồ Chí Minh (Địa chỉ cũ: 314 Nguyễn Trãi, Phường 8, Quận 5, TP.Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/28da7b66-3643-4224-906e-4330491c2f44-310988115_501122428699790_1399222391851240979_n.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/5af695c4-5af7-4a69-aa7d-888d8021b114-310988115_501122428699790_1399222391851240979_n.jpg",
    ctas: null,
  },
  {
    id: "pkdympmh",
    type: "hospital",
    name: "DYM Medical Center Phú Mỹ Hưng",
    address:
      "Phòng 3A01, Tầng 3A, Tòa nhà The Grace, 71 Hoàng Văn Thái, Phường Tân Mỹ, TP. Hồ Chí Minh (Địa chỉ cũ: Phòng 3A01, Tầng 3A, Tòa nhà The Grace, 71 Hoàng Văn Thái, Khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/ca4d188d-65fe-4a83-b584-553f45268df3-picture1_(2).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/e13ee3f7-5b44-4a37-9a9e-2bbbdf9e54a2-picture1_(2).png",
    ctas: null,
  },
  {
    id: "diag004",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 9",
    address: "75 Lê Văn Việt, Phường Hiệp Phú, quận 9 Thành Phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/0be5545d-2917-4625-b26c-4db2bf1df1be-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/17827eb3-0f0d-4343-9bce-b02e3c1c7516-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "labhouse",
    type: "hospital",
    name: "TRUNG TÂM XÉT NGHIỆM Y KHOA LABHOUSE HÀ NỘI",
    address:
      "Tầng 2, tòa D - Vinaconex 2, Phường Định Công, TP Hà Nội (Địa chỉ cũ: Tầng 2, tòa D - Vinaconex 2, Đại Kim, Hoàng Mai, Hà Nội)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/labhouse/web/logo.png?t=Tue%20Sep%2006%202022%2010:52:11%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/labhouse/web/logo.png?t=Tue%20Sep%2006%202022%2010:52:11%20GMT+0700%20(Indochina%20Time)",
    ctas: null,
  },
  {
    id: "pkduclinhlab",
    type: "hospital",
    name: "Phòng khám Đa khoa DUCLINH LAB",
    address:
      "Số 46 đường DT 766, Thôn 4, Xã Hoài Đức, Tỉnh Lâm Đồng (Địa chỉ cũ: Số 46 Đường DT766, Thôn 4, Xã Đức Hạnh, Huyện Đức Linh, Tỉnh Bình Thuận)",
    image:
      "https://cdn.medpro.vn/prod-partner/ef9331a1-e1bd-46d1-b3ea-ac2400652f4e-images_(2).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/4f869c90-103a-4a91-ae5f-f255eb90f6d1-images_(2).png",
    ctas: null,
  },
  {
    id: "bvkangnamsg",
    type: "hospital",
    name: "Bệnh viện thẩm mỹ Kangnam Sài Gòn",
    address:
      "666 Cách Mạng Tháng Tám, Phường Tân Sơn Nhất, Thành phố Hồ Chí Minh (Địa chỉ cũ: 666 Cách Mạng Tháng Tám, Phường 5, Tân Bình, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/85d97491-66f6-4d21-a044-0e98ed9722a5-logo_-_bv_tham_my_kangnam_-_2023_-_final-06.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/9c069a87-c1f2-4509-8e52-383d1413c11f-logo_-_bv_tham_my_kangnam_-_2023_-_final-06.png",
    ctas: null,
  },
  {
    id: "pkdkdiamond",
    type: "hospital",
    name: "Phòng Khám Đa khoa Diamond",
    address:
      "181 Võ Thị Sáu, phường Xuân Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: 181 Võ Thị Sáu, P.Võ Thị Sáu, Q.3, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/0c3a03d6-4667-4723-b11f-48a456b8d617-logo_diamond_1.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/65fd3903-0861-4b77-8bcc-424be47b6a50-logo_diamond_1.png",
    ctas: null,
  },
  {
    id: "pkdksbb",
    type: "hospital",
    name: "Phòng Khám Đa Khoa SBB",
    address: "499 Trần Khát Chân, Quận Hai Bà Trưng, Hà Nội",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/783a646d-a76b-427b-9b77-e768d71ce962-logo-sbb.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/5efa5a23-51b6-4183-a024-c5ff08f4f57e-logo-sbb.png",
    ctas: null,
  },
  {
    id: "benhvien199",
    type: "hospital",
    name: "Bệnh Viện 199",
    address:
      "216 Nguyễn Công Trứ, Phường An Hải, Thành phố Đà Nẵng (Địa chỉ cũ: 216 Nguyễn Công Trứ, Quận Sơn Trà, Đà Nẵng)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/6f701d9d-f1ee-4001-bee9-a884daa27624-199_logo.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/6dde1ac9-153a-49b2-9502-bf9542cbd960-199_logo.png",
    ctas: null,
  },
  {
    id: "diag021",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Mỹ Tho",
    address:
      "102B - 104 Nam Kỳ Khởi Nghĩa,Phường 1, TP. Mỹ Tho, Tỉnh Tiền Giang",
    image:
      "https://cdn.medpro.vn/prod-partner/70fe3401-7e99-4fc8-96f1-03a2cdb9833f-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/3d7f855f-ba14-4a0f-96fd-c3ecd2a9ca11-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "bvmedicbd",
    type: "hospital",
    name: "Bệnh viện Đa Khoa Medic Bình Dương",
    address:
      "14A Nguyễn An Ninh, Phường Thủ Dầu Một, Tỉnh Bình Dương (Địa chỉ cũ: 14A Nguyễn An Ninh, phường Phú Cường, Tp Thủ Dầu Một, Tỉnh Bình Dương)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/bvmedicbd/app/image/logo_phieu_kham.png?t=Thu%20Dec%2022%202022%2009:38:53%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/bvmedicbd/app/image/logo_phieu_kham.png?t=Thu%20Dec%2022%202022%2009:38:53%20GMT+0700%20(Indochina%20Time)",
    ctas: null,
  },
  {
    id: "bsgdhonganh",
    type: "hospital",
    name: "Hệ Thống Phòng Khám Bác Sĩ Gia Đình Hồng Anh",
    address:
      "SH15 One Verandah, Phường Thạnh Mỹ Lợi, Quận 2, TP. Thủ Đức, TP. Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/b175b986-138d-4c18-b573-e876a72d2594-screenshot-20240506-161425.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/1fa12f79-c2dd-4c8c-8e42-27aa2f325522-screenshot-20240506-161425.png",
    ctas: null,
  },
  {
    id: "pkdoctor4you",
    type: "hospital",
    name: "Phòng khám Bác Sỹ Gia Đình Doctor4U",
    address:
      "Tầng 2, Tòa Imperial Suites, 71 Vạn Phúc, Phường Ngọc Hà, Thành phố Hà Nội (Địa chỉ cũ: Tầng 2, Tòa Imperial Suites, 71 Vạn Phúc, Ba Đình, TP. Hà Nội)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/b179af95-8566-4203-a4b5-792fc61c0157-z4427756079181_babcc15bd67b32fc501e549bef4878ab.jpg",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/b2e83183-6344-41cb-8179-5a1344da186a-doctor4u_logo1.jpg",
    ctas: null,
  },
  {
    id: "labhousehcm",
    type: "hospital",
    name: " TRUNG TÂM XÉT NGHIỆM Y KHOA LABHOUSE HỒ CHÍ MINH",
    address:
      "94 An Bình, phường An Đông, TP. Hồ Chí Minh (Địa chỉ cũ: 94 An Bình, Phường 5, Quận 5, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/3774b723-e447-46d3-8e46-50847d50e4a8-logo_2.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/e5896a0f-2151-45e1-8d3f-c6f99365ed5d-logo_2.png",
    ctas: null,
  },
  {
    id: "bvdkbaoson",
    type: "hospital",
    name: "Bệnh viện đa khoa Bảo Sơn",
    address: "52 Nguyễn Chí Thanh, P.Láng Thượng, Q. Đống Đa, Hà Nội ",
    image:
      "https://cdn.medpro.vn/prod-partner/4379eb7f-0251-4917-bc53-89bb910fae19-logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/898f590e-d1e4-4531-a49b-2cb50b86245c-logo.png",
    ctas: null,
  },
  {
    id: "bvnsaigon",
    type: "hospital",
    name: "Bệnh viện Đa khoa Quốc tế Nam Sài Gòn",
    address:
      "Số 88, Đường số 8, Khu dân cư Trung Sơn, xã Bình Hưng, TP Hồ Chí Minh (Địa chỉ cũ: Số 88, Đường số 8, Khu dân cư Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/2784355c-85d1-4abb-ba43-5f44492af084-z4628247786517_aed053f6ed942af52b7a15a051b543b9.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/5c6b26e0-f74d-45b2-8953-679a30d382bb-z4628247786517_aed053f6ed942af52b7a15a051b543b9.jpg",
    ctas: null,
  },
  {
    id: "diag028",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Củ Chi",
    address: "39 Tỉnh lộ 8, Thị trấn Củ Chi, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/4f085155-23c9-450d-8213-84f46d0432c3-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/352d2578-7896-422f-8f93-1108c4de237e-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pknovagen",
    type: "hospital",
    name: "Trung tâm xét nghiệm ADN NOVAGEN - Chi nhánh Miền Nam",
    address:
      "Lầu 2, 359/1/9Ef Lê Văn Sỹ, Phường Nhiêu Lộc (Phường 12, Quận 3 cũ), TP. Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/cffff568-31f6-4cd6-87ea-31df700551b6-logo_roaapoundaang_vieaaaan_laaam_ava.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/2364f972-9323-497e-a84c-40b0ada69f67-logo_roaapoundaang_vieaaaan_laaam_ava.jpg",
    ctas: null,
  },
  {
    id: "gentis",
    type: "hospital",
    name: "Trung tâm xét nghiệm Gentis",
    address: "8/24 Nguyễn Đình Khơi, Phường 4, Quận Tân Bình, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/834e6603-bc42-420b-9367-32035f4adb4f-logo-1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/8dc2b50e-5a95-416a-a58e-7d08077df4ce-logo-1.png",
    ctas: null,
  },
  {
    id: "bvgovap",
    type: "hospital",
    name: "Bệnh viện Đa Khoa Gò Vấp",
    address:
      "641 Quang Trung, Phường Thông Tây Hội, TP.Hồ Chí Minh (Địa chỉ cũ: 641 Quang Trung, P.11, Q.Gò Vấp, TPHCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/2db00850-bd75-45ef-8433-a2e25f181669-abeece55-2f43-41c3-b65b-cdb45e75d0ea.webp",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/10ceef39-2c6f-4ce8-9965-09a5d6f281cc-abeece55-2f43-41c3-b65b-cdb45e75d0ea.webp",
    ctas: null,
  },
  {
    id: "bvquan11",
    type: "hospital",
    name: "Bệnh viện Đa khoa Lãnh Binh Thăng",
    address:
      "72 Đường số 5, Phường Bình Thới, TP. Hồ Chí Minh (Địa chỉ cũ: 72 Đường số 5 - Cư xá Bình Thới, Phường 8, Quận 11, Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/747ccdf2-dcd0-4735-8be6-2af31c0dd11a-z6908651526323_af0739ca6057049556194737232fd20f.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/db69906a-6272-4380-a417-d7332b79b2d1-z6908651526323_af0739ca6057049556194737232fd20f.jpg",
    ctas: null,
  },
  {
    id: "bvdalieuct",
    type: "hospital",
    name: "Bệnh viện Da Liễu Cần Thơ",
    address:
      "Số 12/1, đường 3/2, Phường Tân An, Thành phố Cần Thơ (Địa chỉ cũ: Số 12/1, đường 3/2, P. Hưng Lợi, Q. Ninh Kiều, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/d0607325-69c3-40d9-8332-a4309e19160f-screenshot-20240809-110956.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/f06d86d7-0723-4f9d-a954-bf7cb42fde75-screenshot-20240809-110956.png",
    ctas: null,
  },
  {
    id: "diag005",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 11",
    address: "99 Bình Thới, Phường 11, Quận 11, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/fb570857-f5c4-4767-8bbf-aecefd786771-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/20b631ff-d3d5-4479-b6aa-51a56a52752c-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "healthcvn",
    type: "hospital",
    name: "Phòng xét nghiệm công nghệ cao Health Care Việt Nam",
    address: "37 Trần Kim Xuyến, phường Yên Hoà, quận Cầu Giấy",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/a8c31232-c387-4181-aa13-e72ebe63771e-frame_1000003315_(1).png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/b88bb9a0-88af-428e-965b-4ff38f3168de-frame_1000003315_(1).png",
    ctas: null,
  },
  {
    id: "pkthucuctdh",
    type: "hospital",
    name: "Phòng khám Đa khoa Quốc tế Thu Cúc TCI Trần Duy Hưng",
    address: "216 Trần Duy Hưng, Cầu Giấy, Hà Nội",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/57f01167-8f35-4790-9889-bb33e7048e95-z4528799593792_e3f3029161d06103a8f6ea0ccff4651f_%282%29.jpg",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/54759375-c50c-4a7f-b71a-b2a6ae033ef2-z4528799593792_e3f3029161d06103a8f6ea0ccff4651f_%282%29.jpg",
    ctas: null,
  },
  {
    id: "ttvanhanhcantho",
    type: "hospital",
    name: "Trung tâm Y Khoa Vạn Hạnh Cần Thơ",
    address:
      "D36 D37 Đường số 1, Khu đô thị Hưng Phú, phường Cái Răng, TP. Cần Thơ (Địa chỉ cũ: D36 D37 Đường số 1 khu đô thị Hưng Phú, P. Hưng Thạnh, Q. Cái Răng, Cần Thơ)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/1cbbbc2a-c535-44a9-b58d-b424533709fa-logo_y_khoa_van_hanh.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/d3458051-7357-4359-96bb-ee5a4d8d73bf-logo_y_khoa_van_hanh.png",
    ctas: null,
  },
  {
    id: "pkduyhung",
    type: "hospital",
    name: "Phòng Khám Chẩn Đoán Y Khoa Duy Hưng",
    address:
      "53 Phạm Hữu Chí, phường Chợ Lớn, TP. Hồ Chí Minh (Địa chỉ cũ: 53 Phạm Hữu Chí, Phường 12, Quận 5, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/f71693cd-9967-46d4-aac0-420dd9e3a7c5-logo_phoing_khaim_duy_huing.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/f7aef6ca-92d0-4781-8d00-edb336a5ba87-logo_phoing_khaim_duy_huing.png",
    ctas: null,
  },
  {
    id: "thanhchan",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Quốc Tế Thanh Chân",
    address:
      "Số 6, Nguyễn Thị Thập, Phường Yên Hòa, Hà Nội (Địa chỉ cũ: Số 6, Nguyễn Thị Thập, KĐT Trung Hoà Nhân Chính, Cầu Giấy, Hà Nội)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/c70235c1-3b5b-4d8e-b36c-b5b975a066b3-thanh_chan_logo2.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/9f204c89-edca-436c-a4a6-e8018e9c78ed-thanh_chan_logo2.png",
    ctas: null,
  },
  {
    id: "bvphusanquoctesaigon",
    type: "hospital",
    name: "Bệnh viện Phụ Sản Quốc Tế Sài Gòn",
    address:
      "63 Bùi Thị Xuân, Phường Bến Thành, Thành phố Hồ Chí Minh (Địa chỉ cũ: 63 Bùi Thị Xuân, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/8bc156ea-e3fb-44d3-a2cb-4a2fea90f47f-logo-sihospital-512x512.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/d7372d75-b948-4024-bf17-526dc8b44242-logo-sihospital-512x512.png",
    ctas: null,
  },
  {
    id: "xnpathlab",
    type: "hospital",
    name: "CÔNG TY TNHH XÉT NGHIỆM BỆNH LÝ HỌC VIỆT NAM (Pathlab Việt Nam)",
    address: "630 Nguyễn Chí Thanh, Phường 4, Quận 11, TP.Hồ Chí Minh",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/cd44ad47-7322-4189-907a-06d67c4ebd72-frame_1000004306.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/95e95966-ddb4-4c0a-9527-3e5a272352f6-frame_1000004306.png",
    ctas: null,
  },
  {
    id: "diag023",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Vũng Tàu",
    address: "260A Lê Lợi, Phường 4, TP. Vũng Tàu, Tỉnh Bà Rịa -Vũng Tàu",
    image:
      "https://cdn.medpro.vn/prod-partner/490178b5-b088-4eb8-aabc-27f3eb1ab58a-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/2727b6dc-ed1b-46df-b4de-a4435ec26ef1-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "diag032",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán  Y khoa Diag - Thuận An",
    address:
      "67A Nguyễn Văn Tiết, Phường Lái Thiêu, Thị xã Thuận An, Tỉnh Bình Dương",
    image:
      "https://cdn.medpro.vn/prod-partner/ba316534-2b22-4029-afe5-bebde4ca4c82-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/9955a57b-f454-48c5-9334-3fce198e6d16-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pkvietuc",
    type: "hospital",
    name: "Phòng Khám Việt Úc",
    address:
      "Số 3 Tăng Bạc Hổ, phường Chợ Lớn, TP. Hồ Chí Minh (Địa chỉ cũ: Số 3, Tăng Bạt Hổ, P12, Quận 5, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/5f66da33-34c2-4e23-b1ca-f446cf1e5e13-logo-vietuc_%281%29.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/393902f0-b704-4b06-9175-eb53151d2d8c-logo-vietuc_%281%29.png",
    ctas: null,
  },
  {
    id: "mindlab",
    type: "hospital",
    name: "Trung tâm xét nghiệm Mindlab",
    address: "30 Nguyễn Ngọc Lộc, phường Diên Hồng, TPHCM",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/208a1a56-14b0-4add-b6c6-f8fc85c31b1c-d770ba9b-3934-4e83-ba11-22ec04275456-logo-mindlab.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/d770ba9b-3934-4e83-ba11-22ec04275456-logo-mindlab.png",
    ctas: null,
  },
  {
    id: "bernard",
    type: "hospital",
    name: "Trung tâm Y khoa Chuyên sâu Quốc tế Bernard",
    address:
      "201 Nam Kỳ Khởi Nghĩa, phường Xuân Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: 201 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, TP Hồ Chí Minh)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/2a468ed7-0c82-43a9-abdc-36fcfc6f9ba1-bernard.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/08e9ccd5-5951-4289-bae4-5c2b981682a7-bernard.png",
    ctas: null,
  },
  {
    id: "pkgantamduc",
    type: "hospital",
    name: "Phòng Khám Gan Tâm Đức",
    address:
      "258 Vườn Lài, phường Phú Thọ Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: 258 Vườn lài, P. Phú Thọ Hòa, Q. Tân Phú, TP. HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/ef0a438a-14c9-4b82-8a67-f654d876e0c8-logo-gan-tam-duc.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/ad83d904-ba6b-4303-bb1d-401a57e503fc-logo-gan-tam-duc.png",
    ctas: null,
  },
  {
    id: "pkthienphuc",
    type: "hospital",
    name: "Phòng Khám Nội Tổng Quát - Tim Mạch Thiên Phúc",
    address:
      "550/6/10 Trần Quang Cơ, phường Tân Thới Hiệp, TP. Hồ Chí Minh (Địa chỉ cũ: 550/6/10 Trần Quang Cơ, phường Hiệp Thành, Quận 12, TP.HCM)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/cc7dca8b-f60c-4717-97a4-e8df85e05b3a-z4632115127245_a70041a155dd1c066400263ff80fa595.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/ab071869-42dc-4ded-bd27-b17745d0e95b-z4632115127245_a70041a155dd1c066400263ff80fa595.jpg",
    ctas: null,
  },
  {
    id: "1574",
    type: "hospital",
    name: "Phòng khám Nội tổng hợp Tokyo Family",
    address:
      "127 Hồng Hà, Phường Đức Nhuận, Thành Phố Hồ Chí Minh (Địa chỉ cũ: 127 Hồng Hà, Phường 9, Quận Phú Nhuận, TP. HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/044b2fcb-694d-43cb-a9e4-68f415a3e720-414683991_209858072181052_376534536188249536_n.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/e57493e2-74ff-46aa-b773-0a9f9faa4fc7-414683991_209858072181052_376534536188249536_n.jpg",
    ctas: null,
  },
  {
    id: "hoanmytd",
    type: "hospital",
    name: "Bệnh viện Đa khoa Quốc Tế Hoàn Mỹ Thủ Đức",
    address:
      "241 Quốc lộ 1K, Phường Linh Xuân, TP. Hồ Chí Minh (Địa chỉ cũ: 241 Quốc lộ 1K, Linh Xuân, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/hoanmytd/app/image/logo_circle.png?t=8888888",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/hoanmytd/app/image/logo_circle.png?t=8888888",
    ctas: null,
  },
  {
    id: "diag011",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận Tân Phú",
    address:
      "742 Lũy Bán Bích, Phường Tân Thành, Quận Tân Phú, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/7c533cea-1ed3-405f-9cc9-011dea84c226-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/6d3eb9fa-af55-4bd8-a544-c6a9d0845915-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "dkqtsaigon",
    type: "hospital",
    name: "Hệ thống Đa khoa Quốc tế Sài Gòn",
    address:
      "9 - 15 Trịnh Văn Cấn, Phường Bến Thành, Thành phố Hồ Chí Minh (Địa chỉ cũ: 9 - 15 Trịnh Văn Cấn, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/6d4e39c2-fcfb-40cb-9c1c-030e1997e9dc-logo_sig.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/82a767d0-4b56-45bf-bbd6-133971c04ae0-logo_sig.png",
    ctas: null,
  },
  {
    id: "pkhieuphuc",
    type: "hospital",
    name: "Phòng Khám Nhi Đồng Hiếu Phúc",
    address:
      "489 Minh Phụng, phường Bình Thới, TP. Hồ Chí Minh (Địa chỉ cũ: 489 Minh Phụng, Phường 10, Quận 11, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/f8279831-1eb4-4566-bfb4-40282070e6ff-logo_pk_hieu_phuc.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/1d3bd14a-4787-4382-9ede-51f3384d1e03-logo_pk_hieu_phuc.png",
    ctas: null,
  },
  {
    id: "nknewgateq1",
    type: "hospital",
    name: "Nha Khoa Thẩm Mỹ Quốc Tế New Gate - Quận 1",
    address: "04 Đặng Tất, Tân Định, Quận 1, Thành phố Hồ Chí Minh",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/3c7d6cb8-29f7-4733-aae6-50bca94f280c-frame_1000004341.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/e72d9b55-3e8e-4186-9dd5-3a46cbab684e-frame_1000004341.png",
    ctas: null,
  },
  {
    id: "medlatecdn",
    type: "hospital",
    name: "Phòng khám chuyên khoa xét nghiệm Medlatec Đồng Nai",
    address:
      "1080/4, đường Phạm Văn Thuận, khu phố 2, Phường Tam Hiệp, Đồng Nai (Địa chỉ cũ: 1080/4, đường Phạm Văn Thuận, khu phố 2, phường Tân Mai, TP.Biên Hòa, tỉnh Đồng Nai)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/a720616c-8eb5-493a-82bc-138ba620d4e4-medlatec.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/5123cf78-9d41-436f-85ac-2be8dde37fe0-medlatec.jpg",
    ctas: null,
  },
  {
    id: "ttytvinhthanhct",
    type: "hospital",
    name: "Trung Tâm Y Tế Khu Vực Vĩnh Thạnh",
    address:
      "Số 283, QL80, ấp Vĩnh Tiến, xã Vĩnh Thạnh, TP Cần Thơ (Địa chỉ cũ: Số 283, QL80, Vĩnh Tiến, Thị trấn Vĩnh Thạnh, Huyện Vĩnh Thạnh, Thành phố Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/0caf90b7-8e5c-4a5e-b260-66fc81b361e2-z6918269314916_90e14454c95e43806d2f8f3b0b4bea23.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/c7230445-1b80-4246-85d7-5ab97cb951f3-z6918269314916_90e14454c95e43806d2f8f3b0b4bea23.jpg",
    ctas: null,
  },
  {
    id: "diag027",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 8",
    address: "199B Phạm Hùng, Phường 4, Quận 8, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/7355aad0-dccd-4531-9ffb-c215a13af656-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/a967d1d4-f064-4225-960c-b6ae208aabf5-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pkdk118",
    type: "hospital",
    name: "Phòng khám Đa khoa 118",
    address:
      "Số 7C3-8C3 Đường DD5, KDC An Sương, Phường Tân Hưng Thuận, Quận 12, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/9036aa09-dd9a-41ef-a79b-962b93524d21-118gold-02-300x159.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/011c0b83-1235-440f-bec4-b9205be7343e-118gold-02-300x159.png",
    ctas: null,
  },
  {
    id: "pkdkhd",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Hưng Dũng",
    address: "525/15 SƯ VẠN HẠNH (NỐI DÀI), PHƯỜNG 12, QUẬN 10, TP. HCM",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/60f61a3d-c968-4ee1-bb53-6386ae5709f0-frame_4.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/8de76170-9ce6-4841-9aae-2fb03fd88d14-frame_4.png",
    ctas: null,
  },
  {
    id: "pknovagenhn",
    type: "hospital",
    name: "Trung tâm xét nghiệm ADN NOVAGEN - Hà Nội",
    address:
      "Trung tâm ADN NOVAGEN, tầng 10, toà An Phú, 24 Hoàng Quốc Việt, phường Nghĩa Đô, TP.Hà Nội.",
    image:
      "https://cdn.medpro.vn/prod-partner/e1df67ee-5bff-4acf-9733-e89f60d8a5dd-logo_roaapoundaang_vieaaaan_laaam_ava.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/406100f9-546b-45d4-a6e2-598d93dbf680-logo_roaapoundaang_vieaaaan_laaam_ava.jpg",
    ctas: null,
  },
  {
    id: "pkcxkbstri",
    type: "hospital",
    name: "Phòng khám Cơ xương khớp chuyên sâu TTƯT.BS.CK2 Dương Minh Trí",
    address:
      "182B Lê Văn Sỹ, Phường Phú Nhuận, TP Hồ Chí Minh (Địa chỉ cũ: 182B Lê Văn Sỹ, Phường 10, Quận Phú Nhuận, TP.HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/d06668e8-da7e-41e0-829c-952bd613efeb-screenshot_2025-06-10_101337.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/5d4dfcf3-9bb0-4d6f-9e9f-8c30dc948860-screenshot_2025-06-10_101337.png",
    ctas: null,
  },
  {
    id: "ttykhonglac",
    type: "hospital",
    name: "TRUNG TÂM Y KHOA HỒNG LẠC",
    address: "177 NGUYỄN CHÍ THANH, PHƯỜNG 12,QUẬN 5, TP.HỒ CHÍ MINH",
    image:
      "https://cdn.medpro.vn/prod-partner/74d6729a-2174-440c-a7af-d7781ec2b890-162157-hl.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/ce0936a2-0fa6-4f7f-abb9-987b6b284828-162157-hl.png",
    ctas: null,
  },
  {
    id: "pkhangxanh",
    type: "hospital",
    name: "Phòng khám Đa khoa Quốc tế Hàng Xanh",
    address:
      "393-395-397-399 Điện Biên Phủ, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh (Địa chỉ cũ: 393-395-397-399 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam)",
    image:
      "https://cdn.medpro.vn/prod-partner/8e8622a2-6c59-4203-af31-7df30f7bacdb-z6516578651975_6c1ed84f2b977ce61a1455523fb54062.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/02ed7dab-98c6-4683-9014-4d16df66ebfd-z6516578651975_6c1ed84f2b977ce61a1455523fb54062.jpg",
    ctas: null,
  },
  {
    id: "cdcqltcct",
    type: "hospital",
    name: "Trung tâm Kiểm soát Bệnh tật Cần Thơ - Tiêm chủng",
    address:
      "Số 01 Ngô Đức Kế, Phường Tân An, TP Cần Thơ (Địa chỉ cũ: Số 01 Ngô Đức Kế, P. Tân An, Q.Ninh Kiều, TP.Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/efbc17c6-4793-4f5c-867a-75857bf79a96-cdc-logo-final-2-120x120_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/39294d50-c4cd-4f94-b7bd-0792fd323820-cdc-logo-final-2-120x120_(1).png",
    ctas: null,
  },
  {
    id: "ctchhcm",
    type: "hospital",
    name: "Bệnh viện Chấn Thương Chỉnh Hình TP.HCM",
    address:
      "929 Trần Hưng Đạo, Phường Chợ Quán, TP. Hồ Chí Minh (Địa chỉ cũ: 929 Trần Hưng Đạo, Phường 1, Quận 5, TP.HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/57a546d0-ff95-4040-905c-2b3d67842dba-z7236061740798_b671bb840100899e32fc1edda1677f3e-photoroom.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/9cab6734-9a1b-490a-9ddc-3a819f41550d-z7236061740798_b671bb840100899e32fc1edda1677f3e-photoroom.png",
    ctas: null,
  },
  {
    id: "simmed",
    type: "hospital",
    name: "Phòng khám Đa khoa SIM Med",
    address:
      "Toà nhà Richstar 2 - RS5, 239-241 Đường Hòa Bình, phường Phú Thạnh, TP. Hồ Chí Minh (Địa chỉ cũ: Toà nhà Richstar 2 - RS5, 239-241 đường Hòa Bình, P. Hiệp Tân, Q.Tân Phú,TP.HCM)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/simmed/app/image/logo_circle.png?t=Mon%20Dec%2005%202022%2014:06:12%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/simmed/app/image/logo_circle.png?t=Mon%20Dec%2005%202022%2014:06:12%20GMT+0700%20(Indochina%20Time)",
    ctas: null,
  },
  {
    id: "bvthucuc",
    type: "hospital",
    name: "BỆNH VIỆN ĐA KHOA QUỐC TẾ THU CÚC",
    address:
      "286 Thụy Khuê, Phường Tây Hồ, Thành phố Hà Nội (Địa chỉ cũ: 286 Thụy Khuê, Tây Hồ, Hà Nội)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/41e23b05-2306-46e3-b242-a1cd0d5d8cf6-z4528799593792_e3f3029161d06103a8f6ea0ccff4651f.jpg",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/a54ea4b8-df2d-4b80-87f5-f0fb32b877be-z4528799593792_e3f3029161d06103a8f6ea0ccff4651f.jpg",
    ctas: null,
  },
  {
    id: "quoctecity",
    type: "hospital",
    name: "Bệnh viện Quốc tế City - CIH",
    address:
      "03 Đường 17A, phường An Lạc, TP. Hồ Chí Minh (Địa chỉ cũ: Số 3, Đường 17A, P.Bình Trị Đông B, Q. Bình Tân, TP. Hồ Chí Minh)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/quoctecity/web/logo.png?t=Wed%20Mar%2008%202023%2015:58:38%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/quoctecity/web/logo.png?t=Wed%20Mar%2008%202023%2015:58:38%20GMT+0700%20(Indochina%20Time)",
    ctas: null,
  },
  {
    id: "pkdkphapanh",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Pháp Anh",
    address:
      "222-224-226 Nguyễn Duy Dương   Phường Vườn Lài, TP.HCM (Địa chỉ cũ: 222-224-226 Nguyễn Duy Dương, Phường 4, Quận 10, TP.HCM)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/0cfb3bc7-0735-40a2-9e3d-9af3965e0462-zyro-image_(14)_1.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/bbe2c5d5-6d23-4e99-9def-bc7d956bb0e1-zyro-image_(14)_1.png",
    ctas: null,
  },
  {
    id: "bvhungviet",
    type: "hospital",
    name: "Bệnh viện Ung bướu Hưng Việt",
    address: "34 và 40 Đại Cồ Việt, Phường Hai Bà Trưng, Hà Nội",
    image:
      "https://cdn.medpro.vn/prod-partner/75e18f02-3920-4ea1-8fb7-00922f5fa354-picture1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/2a75d498-ab34-443b-a0f8-76495124e591-picture1.png",
    ctas: null,
  },
  {
    id: "tttamlytaman",
    type: "hospital",
    name: "Trung tâm Trị liệu Tâm lý Tâm An",
    address:
      "Số 79, ngõ 619 Vũ Tông Phan, phường Khương Đình, quận Thanh Xuân, TP Hà Nội",
    image:
      "https://cdn.medpro.vn/prod-partner/4c87cdab-3610-43d4-befb-046f664eed7a-web1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/3a8e480e-f32c-4b8b-aa38-d7033b05cece-web1.png",
    ctas: null,
  },
  {
    id: "pkhoanmysg",
    type: "hospital",
    name: "Phòng khám Đa khoa Thuận Mỹ Sài Gòn (Thành viên Tập đoàn Y Khoa Hoàn Mỹ)",
    address:
      "4A Hoàng Việt, Phường Tân Sơn Nhất, TP. HCM (Địa chỉ cũ: 4A Hoàng Việt, Phường 4, Quận Tân Bình, TPHCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/5b4c116b-8da5-4e3c-a4d8-82b334715a84-logo_thuan_my_pink-05.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/b7786456-d1a0-4332-86e2-502a55e7f2e5-logo_thuan_my_pink-05.png",
    ctas: null,
  },
  {
    id: "diag035",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Huỳnh Tấn Phát",
    address:
      "1375 - 1377 Huỳnh Tấn Phát, KP4, Phường Phú Thuận, Quận 7, Thành phố Hồ Chí Minh ",
    image:
      "https://cdn.medpro.vn/prod-partner/e32c18ba-4b28-4c0f-8d6e-57b26ae33384-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/88816029-a88d-4180-8af5-ff75aa593f9e-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "bvdktnct",
    type: "hospital",
    name: "Trung tâm Y tế khu vực Thốt Nốt",
    address:
      " Số 62, Quốc lộ 91, khu vực Phụng Thạnh 1, Phường Thuận Hưng, tTP. Cần Thơ (Địa chỉ cũ: Số 62, quốc lộ 91, KV Phụng Thạnh 1, phường Thốt Nốt, quận Thốt Nốt, TP Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/41ddd360-e6c4-453f-a072-909853dda306-z6858665507529_23b2ef34a7ec7ce766d1b3f77daea91c.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/8a08d64d-0cd4-4ece-8423-32685d1d57fa-z6858665507529_23b2ef34a7ec7ce766d1b3f77daea91c.jpg",
    ctas: null,
  },
  {
    id: "ttmedilabphuyen",
    type: "hospital",
    name: "Trung Tâm Xét Nghiệm MEDILAB SÀI GÒN - CN Phú Yên",
    address:
      "Lô PG1-08A, Vincom, Hùng Vương, phường Tuy Hòa, tỉnh Đắk Lắk (Địa chỉ cũ: Lô PG1-08A, Vincom, Hùng Vương, P7, Tuy Hoà, Phú Yên)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/c717398f-42a2-44b9-a325-3051ea6e0852-medilab_py.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/e04f7a65-732c-49dd-95bc-37ab4bde4e3f-medilab_py.png",
    ctas: null,
  },
  {
    id: "pkmeccare",
    type: "hospital",
    name: "Phòng khám đa khoa - Tiêm chủng Meccare",
    address:
      "578 - 580 Hương lộ 2, Bình Trị Đông,Bình Tân,Thành phố Hồ Chí Minh",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/e86157fb-acae-4fe1-b8f2-535e8cd21764-z4707491066451_328f46adbe682d7080db18161bc25744.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/6d541dc5-1fd8-4e70-8b98-2d736d3f1720-z4707491066451_328f46adbe682d7080db18161bc25744.jpg",
    ctas: null,
  },
  {
    id: "dalieuhcm",
    type: "hospital",
    name: "Bệnh viện Da Liễu TP.HCM",
    address:
      "02 Nguyễn Thông, Phường Xuân Hòa, TP.Hồ Chí Minh (Địa chỉ cũ: 2 Nguyễn Thông, Phường Võ Thị Sáu, Quận 3, TP.HCM)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/dalieuhcm/app/image/logo_circle.png?t=123",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/dalieuhcm/app/image/logo_circle.png?t=123",
    ctas: null,
  },
  {
    id: "bvttct",
    type: "hospital",
    name: "Bệnh viện Tâm Thần Thành phố Cần Thơ",
    address:
      "KV. Bình Hòa A, Phường Phước Thới, TP. Cần Thơ (Địa chỉ cũ: KV. Bình Hòa A, Phường Phước Thới, Quận Ô Môn, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/342372f0-ec4d-4064-9519-98f567971677-z6922256147316_bcb51dc64962fca0506805c622bffc71-removebg-preview.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/414bcc52-fb62-4194-93c1-0a69a822c66c-z6922256147316_bcb51dc64962fca0506805c622bffc71-removebg-preview.png",
    ctas: null,
  },
  {
    id: "bvthiennhandn",
    type: "hospital",
    name: "Trung tâm Chẩn đoán Y khoa Kỹ thuật cao Thiện Nhân",
    address:
      "276-278-280 Đống Đa, P. Hải Châu, TP. Đà Nẵng (Địa chỉ cũ: 276-278-280 Đống Đa, P.Thanh Bình, Q.Hải Châu, Đà Nẵng)",
    image:
      "https://cdn.medpro.vn/prod-partner/d81be613-db08-4cc0-ae41-a048ce25cd7b-logo-new-t10-1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/494708e0-1e8a-4967-85a2-9293f86de2bf-logo-new-t10-1.png",
    ctas: null,
  },
  {
    id: "nksohi",
    type: "hospital",
    name: "Nha Khoa SOHI Dental",
    address:
      "Chung cư Hoàng Anh Thanh Bình, 2 Đ. D4, Tân Hưng, Quận 7, Thành phố Hồ Chí Minh",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/2d56b7ee-ca6a-4e71-a951-db67902697d2-frame_1000004345_(1).png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/e5218d62-9573-437e-aa58-92d7e8b337b6-frame_1000004345_(1).png",
    ctas: null,
  },
  {
    id: "bvndgiadinhcs2",
    type: "hospital",
    name: "Bệnh viện Nhân Dân Gia Định (Cơ sở 2)",
    address: "125 Lê Lợi, Phường Bến Thành, Quận 1, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/6d40f0b7-0fae-4ffc-88da-0851fcc81fbe-721f45d6-348b-4ce2-bce0-260516ad21a0-logo_512x512px.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/01f46ce8-febb-496c-98ed-4048490d2d97-721f45d6-348b-4ce2-bce0-260516ad21a0-logo_512x512px.png",
    ctas: null,
  },
  {
    id: "bvsingapore",
    type: "hospital",
    name: "Bệnh viện đa khoa Singapore (Singapore General Hospital)",
    address: "Bukit Merah, Central Region, Singapore",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/6e45965e-09bd-4a35-b396-5df82f3e443e-logo_sgh_512x512_(2).png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/eb5f2829-0bbd-4fb5-9f62-7646a9f9dccc-logo_sgh_512x512_(2).png",
    ctas: null,
  },
  {
    id: "diag038",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận Tân Bình",
    address:
      "1166 Cách Mạng Tháng 8, Phường 4, Quận Tân Bình, Thành phố Hồ Chí Minh ",
    image:
      "https://cdn.medpro.vn/prod-partner/e8b06a3b-2783-4eb0-ac5d-a43c2c51d94e-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/58a426a4-ea37-4c2e-b3c4-44faa98e0a53-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "ttmat3psg",
    type: "hospital",
    name: "Trung tâm Mắt Công Nghệ Cao 3P Sài Gòn",
    address: "9 - 101 Đường Số 3, KDC Cityland, Phường Gò Vấp, TP Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/5df35a2d-8604-4008-bc91-05e603abc98d-logo_fix.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/2aa0fd80-d651-4844-9c70-8493343cf221-logo_fix.png",
    ctas: null,
  },
  {
    id: "wecare",
    type: "hospital",
    name: "Wecare247 - Chăm sóc tại nhà và bệnh viện",
    address:
      "291 Điện Biên Phủ, phường Xuân Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: 291 Điện Biên Phủ, P. Võ Thị Sáu, Q. 3, TP. HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/c1c3caa1-3dfb-47a7-9147-8051a0ea6a6f-logo_wecare.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/f5b95d72-e1aa-4126-9773-bbf2adcda83d-logo_wecare.png",
    ctas: null,
  },
  {
    id: "bvtmhsaigon",
    type: "hospital",
    name: "Bệnh viện Tai Mũi Họng Sài Gòn",
    address:
      "6-8 Trịnh Văn Cấn, Phường Bến Thành, Thành phố Hồ Chí Minh (Địa chị cũ: 6-8 Trịnh Văn Cấn, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/7c2f0b0d-8037-4709-a382-5d2235a29c88-logo_sgent.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/f57e7fc6-797e-432d-8d9e-0456663847bd-logo_sgent.png",
    ctas: null,
  },
  {
    id: "diag002",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 5",
    address: "309 Trần Phú, Phường 8, Quận 5, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/f6a82ee6-e151-4955-8112-f670309be2b8-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/f0976b07-2e4c-4fc9-8a7e-896e782950aa-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pkddbstran",
    type: "hospital",
    name: "Phòng khám chuyên khoa Dinh Dưỡng Ths.BSCKI. Lê Thị Ngọc Trân",
    address:
      "1562/10A, đường DT743B, khu phố Đông Thành, phường Tân Đông Hiệp, thành phố Dĩ An, tỉnh Bình Dương",
    image:
      "https://cdn.medpro.vn/prod-partner/00b20f18-cd98-4b64-b8f3-8cf0a00c73c1-bs-ngoc-tran_logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/14d54baf-d781-4b27-99e6-945a30570709-bs-ngoc-tran_logo.png",
    ctas: null,
  },
  {
    id: "diag007",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận Thủ Đức",
    address:
      "275 Tô Ngọc Vân, Phường Linh Đông, Quận Thủ Đức, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/2a112b0e-9f71-4c1e-a0c7-332cd349878d-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/14242563-fd07-47a7-992e-e6d2d177d35b-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "nktmng",
    type: "hospital",
    name: "Nha khoa Thẩm Mỹ Quốc Tế New Gate",
    address: "218 Tân Hương, Tân Quý, Tân Phú, Thành phố Hồ Chí Minh",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/2b337c12-cf76-4c41-848b-c3511957051a-frame_1000004341.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/77521775-c1f4-4bb0-888d-9ab5b27aee63-frame_1000004341.png",
    ctas: null,
  },
  {
    id: "ctysunnyhouse",
    type: "hospital",
    name: "Công ty Tham Vấn Trị Liệu Tâm Lý Sunny House",
    address: "03 đường 5A Khu dân cư An Phú Tây, Bình Chánh, TP.HCM ",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/8c6b3943-cce4-465c-9d66-141859d76db9-logo.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/634b81ac-12d5-4fbb-99ca-3e6677a9c744-logo.png",
    ctas: null,
  },
  {
    id: "bvtmct",
    type: "hospital",
    name: "Bệnh viện Tim mạch Thành phố Cần Thơ",
    address:
      "Số 204 Trần Hưng Đạo, P. Ninh Kiều, TP. Cần Thơ (Địa chỉ cũ: 204 Trần Hưng Đạo, P. An Nghiệp, Q. Ninh Kiều, TP. Cần Thơ)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/ab48f0a0-1770-487f-a7c3-74a08d39961c-logo_tim_mach_can_tho.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/faf1d42f-7e21-4afd-8331-6efefd7d0ff2-logo_tim_mach_can_tho.jpg",
    ctas: null,
  },
  {
    id: "pknkbst",
    type: "hospital",
    name: "Phòng khám Nam khoa & Hiếm muộn Khang Trí - Thạc sĩ Bác sĩ Lê Vũ Tân",
    address:
      "26 Vĩnh Viễn, Phường Vườn Lài, Thành phố Hồ Chí Minh (Địa chỉ cũ: 26 Vĩnh Viễn, Phường 2, Quận 10, TPHCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/150f8850-882e-4256-8f1c-2146535e1603-logo_-_khang_tri_-_900x900.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/96da4fdf-fc0e-404c-ac55-574d2a51c6c4-logo_-_khang_tri_-_900x900.jpg",
    ctas: null,
  },
  {
    id: "medilabsgpt",
    type: "hospital",
    name: "Trung Tâm Xét Nghiệm Medilab Sài Gòn - Chi nhánh Bình Thuận",
    address:
      "35 Phạm Ngọc Thạch, Phường Phan Thiết, Tỉnh Lâm Đồng (Địa chỉ cũ: 35 Phạm Ngọc Thạch, Phú Trinh, Phan Thiết, Bình Thuận)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/medilabsgpt/web/logo.png?t=Thu%20Jul%2014%202022%2008:35:52%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/medilabsgpt/web/logo.png?t=Thu%20Jul%2014%202022%2008:35:52%20GMT+0700%20(Indochina%20Time)",
    ctas: null,
  },
  {
    id: "bvhungvuong",
    type: "hospital",
    name: "Bệnh viện Hùng Vương",
    address:
      "128 Hồng Bàng, Phường Chợ Lớn, Thành phố Hồ Chí Minh (Địa chỉ cũ: 128 Hồng Bàng, Phường 12, Quận 5, TP.Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/de2cc234-a2ad-452d-8172-6e81d3ad78c8-logo-benh-vien-hung-vuong.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/44dddc1e-fe11-460c-a81c-f212d7b0ace3-logo-benh-vien-hung-vuong.png",
    ctas: null,
  },
  {
    id: "bvhhtmct",
    type: "hospital",
    name: "Bệnh viện Huyết học - Truyền máu Thành phố Cần Thơ",
    address: "317 Nguyễn Văn Linh, Phường Tân An, TP. Cần Thơ",
    image:
      "https://cdn.medpro.vn/prod-partner/eab6caa6-8862-4a1c-827a-455ac806b0db-z7139627597838_bce1e2d065f42eee81c9bcf5d7443e1d-removebg-preview.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/aae54b0d-4e75-4841-9253-a61a97cdadad-z7139627597838_bce1e2d065f42eee81c9bcf5d7443e1d-removebg-preview.png",
    ctas: null,
  },
  {
    id: "pkdkvigor",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Vigor Health",
    address:
      "100-102-102A-104-106-108 Trương Định, Phường 9, Quận 3, Tp. Hồ Chí Minh",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/abef9956-6b5d-435a-81eb-5be6c7df6304-frame_1000004421.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/04ac06e5-3218-4443-ba5f-87447d9a6ada-frame_1000004421.png",
    ctas: null,
  },
  {
    id: "bvdktiengiang",
    type: "hospital",
    name: "Bệnh viện Đa khoa Tiền Giang",
    address:
      "Số 315, QL1A, Khu phố Long Hưng, Phường Phước Thạnh, Tỉnh Đồng Tháp (Địa chỉ cũ: Số 315, QL1A, ấp Long Hưng, xã Phước Thạnh, TP.Mỹ Tho, Tiền Giang)",
    image:
      "https://cdn.medpro.vn/prod-partner/d4726dec-6bad-478e-9143-572afe2ada0f-logo_tiengiang_copy.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/51c8a8c5-8501-4593-95ae-bae31cf6851c-logo_tiengiang_copy.png",
    ctas: null,
  },
  {
    id: "bvnhattan",
    type: "hospital",
    name: "Bệnh viện Nhật Tân",
    address:
      "32, Phạm Ngọc Thạch, Tổ 14 Khóm Châu Long 7, Phường Châu Đốc, An Giang (Địa chỉ cũ: 32, Phạm Ngọc Thạch, Tổ 14 Khóm Châu Long 7, Phường Châu Phú B, TP.Châu Đốc, An Giang)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/8c192fe5-c70e-4332-9d90-4f71264dc0a0-z4534580361527_9f269f2d02eb30f812cf83576ecdc7c8.jpg",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/0cfcbb9e-8173-4176-bae2-a3f2203ff5a6-9fe7259e-6273-4f8f-9398-19eeaedd2652.png",
    ctas: null,
  },
  {
    id: "pkthucucdt",
    type: "hospital",
    name: "Phòng khám Đa khoa Thu Cúc TCI Đại Từ",
    address: "32 Đại Từ, Hoàng Mai, Hà Nội",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/9031f482-3823-4a4c-9ad9-c578e55a9c5b-z4528799593792_e3f3029161d06103a8f6ea0ccff4651f_%282%29.jpg",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/f4ec97ea-1571-4afa-a5df-771175020057-z4528799593792_e3f3029161d06103a8f6ea0ccff4651f_%282%29.jpg",
    ctas: null,
  },
  {
    id: "pkbabydino",
    type: "hospital",
    name: "Phòng Khám Nhi và Tâm lý Baby Dino",
    address: "120B Lê Niệm, Phường Phú Thạnh (Quận Tân Phú cũ), TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/2f240e1a-d547-43b7-bc65-dc95dc8a9eb2-404552484_7148767758516706_1092604409410667378_n.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/d8820357-064a-4818-b8c8-df184bf8291a-404552484_7148767758516706_1092604409410667378_n.jpg",
    ctas: null,
  },
  {
    id: "diag017",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận Bình Thạnh",
    address: "85 Nơ Trang Long, P11, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/7a3047ab-f8c3-46e2-8633-861767dd183b-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/623512ab-d743-4a06-8d55-d51f12353940-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "bvbnd",
    type: "hospital",
    name: "Bệnh viện Bệnh Nhiệt đới",
    address:
      "764 Võ Văn Kiệt, Phường Chợ Quán, TP. Hồ Chí Minh (Địa chỉ cũ: 764 Võ Văn Kiệt, Phường 1, Quận 5, TP.Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/aa438828-15f9-4789-a461-d82b882b0f16-logo-benh-vien-nhiet-doi-1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/9b14cd6e-462b-4630-8f22-e3a859d6efb1-logo-benh-vien-nhiet-doi-1.png",
    ctas: null,
  },
  {
    id: "vientimhcm",
    type: "hospital",
    name: "Viện Tim TP. Hồ Chí Minh",
    address:
      "Số 04 Dương Quang Trung, Phường Hòa Hưng, Thành phố Hồ Chí Minh (Địa chỉ cũ: Số 04 Dương Quang Trung, Phường 12, Quận 10, TP. Hồ Chí Minh)",
    image:
      "https://resource.medpro.com.vn/static/images/vientimhcm/web/logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/2c524c32-be5a-4331-9836-53e76f884ebc-logo.png",
    ctas: null,
  },
  {
    id: "diag029",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Đinh Tiên Hoàng",
    address:
      "101 Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/97668222-f912-4e35-aa82-6fc63de8e44f-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/0381753d-3977-4865-8e66-7b2340885172-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "bvndgiadinh",
    type: "hospital",
    name: "Bệnh viện Nhân Dân Gia Định",
    address:
      "Số 1 Nơ Trang Long, Phường Gia Định, TP. Hồ Chí Minh (Địa chỉ cũ: Số 1 Nơ Trang Long, Phường 7, Quận Bình Thạnh, TP.HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/721f45d6-348b-4ce2-bce0-260516ad21a0-logo_512x512px.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/4a734d49-5a45-492e-9bde-f56dd6257dc3-logo_512x512px.png",
    ctas: null,
  },
  {
    id: "hoanmyvp1",
    type: "hospital",
    name: "Bệnh viện Hoàn Mỹ Bình Dương (Vạn Phúc 1)",
    address:
      "45 Hồ văn Cống, Phường Chánh Hiệp, Thành phố Hồ Chí Minh (Địa chỉ cũ: 45 Hồ văn Cống, Khu Phố 4, P. Tương Bình Hiệp TP. Thủ Dầu Một, Bình Dương)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/hoanmyvp1/app/image/logo_circle.png?t=123",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/hoanmyvp1/app/image/logo_circle.png?t=123",
    ctas: null,
  },
  {
    id: "vanhanh",
    type: "hospital",
    name: "Bệnh viện Đa khoa Vạn Hạnh",
    address:
      "781/B1-B3-B5 Lê Hồng Phong, Phường Hoà Hưng, Thành Phố Hồ Chí Minh (Địa chỉ cũ: 781/B1-B3-B5 Lê Hồng Phong nối dài, Phường 12, Quận 10, TP.HCM)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/vanhanh/web/logo.png?t=2222222",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/0425d0ad-034a-451a-8179-8a34a599def5-logo.png",
    ctas: null,
  },
  {
    id: "pktimec",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Quốc Tế TIMEC",
    address:
      "Hội sở: 4449 Nguyễn Cửu Phú, phường Tân Tạo, TP. Hồ Chí Minh  CN: 6-8 Nguyễn Thiện Thuật, Phường Bình Thạnh, Thành phố Hồ Chí Minh (Địa chỉ cũ: Hội sở: 4449 Nguyễn Cửu Phú, P. Tân Tạo A, Q. Bình Tân, TP.HCM. CN: 6-8 Nguyễn Thiện Thuật, Phường 24, Q. Bình Thạnh, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/9c6b7b92-8d16-4e7e-a080-8cfff5179ea0-timec-logo_1.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/7bd397f4-611c-4926-b354-5a7127ffc21c-timec-logo_1.png",
    ctas: null,
  },
  {
    id: "bvhoanmysg",
    type: "hospital",
    name: "Bệnh viện Hoàn Mỹ Sài Gòn",
    address:
      "60 - 60A Phan Xích Long, Phường Cầu Kiệu, TP. Hồ Chí Minh (Địa chỉ cũ: 60-60A Phan Xích Long, Phường 1, Phú Nhuận, Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/a89bd8f8-42b7-4522-a5ff-6f0b814122f8-screenshot_2025-07-09_130558.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/8e5e8a99-26b1-4103-b192-777dc87eafc6-screenshot_2025-07-09_130558.png",
    ctas: null,
  },
  {
    id: "bvhd2",
    type: "hospital",
    name: "Bệnh Viện Đa Khoa Hồng Đức II",
    address:
      "259 An Phú Đông 3, Khu phố 5, Phường An Phú Đông, Thành phố Hồ Chí Minh (Địa chỉ cũ: 259 An Phú Đông 3, Khu phố 5, Phường An Phú Đông, Quận 12, TP.HCM)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/a885d5a3-9b77-448b-a471-caec45f74717-untitled-1-01.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/f5218a7e-1095-4307-ac24-37d796006576-untitled-1-01.png",
    ctas: null,
  },
  {
    id: "ttykpdl",
    type: "hospital",
    name: "Trung tâm Y khoa Pasteur Đà Lạt",
    address:
      "5 Thống Nhất; Xã Đức Trọng; Tỉnh Lâm Đồng (Địa chỉ cũ: 5 Thống Nhất, TT. Liên Nghĩa, H. Đức Trọng, T. Lâm Đồng)",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/1c9a0384-9f72-4328-8f11-c1ed78baa346-z4668682726648_6cbe1bd3bbfa7dd5237805ab8e62016b.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/f8a26801-5113-4fb0-8cf4-ac512e2d179e-z4668682726648_6cbe1bd3bbfa7dd5237805ab8e62016b.jpg",
    ctas: null,
  },
  {
    id: "vietucsaigon",
    type: "hospital",
    name: "Chăm Sóc Tại Nhà Việt Úc",
    address:
      "215 Đinh Tiên Hoàng, phường Tân Định, TP. Hồ Chí Minh (Địa chỉ cũ: Số 215 Đinh Tiên Hoàng, Tân Định, Quận 1, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/21dbea11-5496-4f98-9353-828156488e95-logo-vietuc.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/2b1fc362-fb42-4cd5-8a38-bf394c09e0f1-logo-vietuc.png",
    ctas: null,
  },
  {
    id: "bvqdyct",
    type: "hospital",
    name: "Bệnh viện Quân Dân Y Thành Phố Cần Thơ",
    address:
      "Ấp Thới Bình, Xã Cờ Đỏ, TP. Cần Thơ (Địa chỉ cũ: Ấp Thới Bình, TT. Cờ Đỏ, H. Cờ Đỏ, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/553d268a-85d8-4f5d-b01c-90afbb140cb8-logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/c8ee356a-152e-4f8a-a458-5c1231c1551f-logo.png",
    ctas: null,
  },
  {
    id: "dkbddanang",
    type: "hospital",
    name: "Bệnh viện Đa khoa Bình Dân Đà Nẵng",
    address:
      "376 Trần Cao Vân, Phường Thanh Khê, TP. Đà Nẵng (Địa chỉ cũ: 376 Trần Cao Vân, Phường Xuân Hà, Quận Thanh Khê, TP. Đà Nẵng)",
    image:
      "https://cdn.medpro.vn/prod-partner/f60ee5d0-4991-403c-ad6d-1c50a3982e2d-1766327513141-675acf77-cf79-49c9-b913-3b7a2e127e58_1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/b4a471c9-b811-4a59-9484-be7ed4e4d045-1766327513141-675acf77-cf79-49c9-b913-3b7a2e127e58_1.png",
    ctas: null,
  },
  {
    id: "ishiisaigon",
    type: "hospital",
    name: "Phòng khám đa khoa Nhật Bản - Ishii Sài Gòn",
    address: "616A Nguyễn Chí Thanh, Phường 4, Quận 11, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/98c38140-d7f2-47d2-929b-6b1230841770-logo-vuong-2000.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/08ab08b8-5274-4c92-89eb-770f83177159-logo-vuong-2000.jpg",
    ctas: null,
  },
  {
    id: "pnthcm",
    type: "hospital",
    name: "Bệnh viện Phạm Ngọc Thạch",
    address:
      "120 đường Hồng Bàng, Phường Chợ Lớn, Thành phố Hồ Chí Minh (Địa chỉ cũ: 120 Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/02a508f0-0486-49af-86b8-9882adc141a7-channels4_profile.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/6dc5649e-731a-44fc-b3cb-9a3cb7504e16-channels4_profile.jpg",
    ctas: null,
  },
  {
    id: "pkdymsg",
    type: "hospital",
    name: "DYM Medical Center Sài Gòn",
    address:
      "Phòng B101-B103, tầng hầm 1, toà nhà mPlaza Saigon, 39 Lê Duẩn, Phường Sài Gòn, TP.HCM (Địa chỉ cũ: Phòng B103, Tầng hầm 1, Tòa nhà mPlaza Saigon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/1f26eb20-0d2a-4bed-9819-f1433602eea2-picture1_(2).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/c597f9c2-2b85-43fd-83b6-088dfa8ef5dd-picture1_(2).png",
    ctas: null,
  },
  {
    id: "ttxnetm",
    type: "hospital",
    name: "Trung Tâm Xét Nghiệm Y khoa ETM",
    address: "127/5/12 Lê Thúc Hoạch, quận Tân Phú, TP.HCM",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/9718264f-f6be-4cbb-a15c-0b15e7cc4bfb-emt.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/f461778c-1b49-47e2-9a5c-b94d84140f2b-emt.png",
    ctas: null,
  },
  {
    id: "ykhoathaiduong",
    type: "hospital",
    name: "Phòng khám Y Học Cổ Truyền Y Khoa Thái Dương",
    address:
      "15A Trần Khánh Dư, P. Ninh Kiều, TP. Cần Thơ (Địa chỉ cũ: 15A Đ. Trần Khánh Dư, Xuân Khánh, Ninh Kiều, Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/7169a6d4-9299-437f-8445-cdf91f64aea5-y_khoa_thai_duong_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/86a084f1-d270-43a4-b918-02dbb8adbb7c-y_khoa_thai_duong_(1).png",
    ctas: null,
  },
  {
    id: "pkvhc",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Quốc Tế Việt Health Care",
    address:
      "10-16-18 Đường Lý Thường Kiệt, Phường Diên Hồng, Thành phố Hồ Chí Minh",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/d4ad2acd-6fe6-49ea-b979-167c0bec87d7-z4879202416853_571a04d1caaf4623ad763ec5c378aecd_1.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/2fe5d206-0072-456a-adeb-3adc9cd81ef8-z4879202416853_571a04d1caaf4623ad763ec5c378aecd_1.png",
    ctas: null,
  },
  {
    id: "pkpensilia",
    type: "hospital",
    name: "Phòng khám Da liễu - Thẩm mỹ Pensilia",
    address: "411/2-413-415 Nguyễn Đình Chiểu, Phường Bàn Cờ, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/7bca8fcd-1d4f-4355-8f6c-f2eefea2d9b9-artboard_1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/7ed8fc6b-0a10-4ce4-80d5-d98f28be4108-artboard_1.png",
    ctas: null,
  },
  {
    id: "sghealthcare",
    type: "hospital",
    name: "Phòng khám đa khoa Saigon Healthcare",
    address:
      "45 Thành Thái, phường Diên Hồng, TP. Hồ Chí Minh (Địa chỉ cũ: 45 Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/sghealthcare/web/logo.png?1678267424855?t=Wed%20Mar%2008%202023%2016:23:44%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/sghealthcare/web/logo.png?1678267424855?t=Wed%20Mar%2008%202023%2016:23:44%20GMT+0700%20(Indochina%20Time)",
    ctas: null,
  },
  {
    id: "pkacc2",
    type: "hospital",
    name: "Phòng khám ACC Chợ Lớn - HCM",
    address:
      "Lầu 1, Tản Đà Court, 86 Tản Đà, Phường Chợ Lớn, TP.HCM (Địa chỉ cũ: Lầu 1, Tản Đà Court, 86 Tản Đà, Phường 11, Quận 5, TP.HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/58193597-cf5a-4f89-953f-a063bc6208b6-imgpsh_fullsize_anim11.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/58858776-ca27-48a0-a9ed-433e665d9746-imgpsh_fullsize_anim11.png",
    ctas: null,
  },
  {
    id: "diag037",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Bình Trưng Tây",
    address:
      "323 Nguyễn Duy Trinh, Phường Bình Trưng Tây, Quận 2, Thành phố Hồ Chí Minh ",
    image:
      "https://cdn.medpro.vn/prod-partner/78d52c88-27b6-4060-b592-9ece2444e257-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/08cdcbb8-74be-40e2-9adb-4cbbc81e8b55-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "umc2",
    type: "hospital",
    name: "Bệnh viện Đại học Y Dược TP.HCM (Cơ sở 2)",
    address:
      "CS2: 201 Nguyễn Chí Thanh - Phường Chợ Lớn - TP. Hồ Chí Minh (Địa chỉ cũ: 201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh)",
    image: "https://bo-api.medpro.com.vn/static/images/umc2/web/logo.png",
    circleLogo: "https://bo-api.medpro.com.vn/static/images/umc2/web/logo.png",
    ctas: null,
  },
  {
    id: "pksospq",
    type: "hospital",
    name: "Phòng Khám Đa Khoa S.O.S Phú Quốc - Cơ Sở 1",
    address:
      "Số 350 Nguyễn Trung Trực, Khu phố 12, Phường Dương Đông, TP.Phú Quốc, Tỉnh Kiên Giang",
    image:
      "https://cdn.medpro.vn/prod-partner/fa3e8574-3820-46ac-bea9-b15c993c0ec2-logo_(1).jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/0815ff9c-d77e-4c97-9a63-4245a1b13828-logo_(1).jpg",
    ctas: null,
  },
  {
    id: "pkdksp79",
    type: "hospital",
    name: "Phòng khám Đa khoa SP79",
    address: "89 Phan Đình Phùng, Phường Phú Nhuận, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/79ed8bc8-2605-4a22-b662-3697d5ca86fb-tiaaoang_viaaat_taach_naaan-01_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/351d6955-967c-4e67-b649-48007e5e0b70-tiaaoang_viaaat_taach_naaan-01_(1).png",
    ctas: null,
  },
  {
    id: "bvquan1",
    type: "hospital",
    name: "Bệnh viện Quận 1 - Cơ sở 1",
    address:
      "338 Hai Bà Trưng, Phường Tân Định, TP Hồ Chí Minh (Địa chỉ cũ: 338 Hai Bà Trưng, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/5f66f5d4-1914-40a6-ac60-9720190b75e1-logobvquan1.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/b4e983f0-b2c9-4986-9308-9a4a6353e711-logobvquan1.png",
    ctas: null,
  },
  {
    id: "umc",
    type: "hospital",
    name: "Bệnh viện Đại học Y Dược TP.HCM",
    address:
      "CS1: 215 Hồng Bàng, Phường Chợ Lớn, TP.Hồ Chí Minh (Địa chỉ cũ: 215 Hồng Bàng, Phường 11, Quận 5, TP.HCM)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/umc/web/logo.png?t=2222222",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/c09e66cd-2bbc-4e51-8df4-74417648343a-logo.png",
    ctas: null,
  },
  {
    id: "cdcct",
    type: "hospital",
    name: "Trung tâm Kiểm soát Bệnh tật Cần Thơ - Khám bệnh",
    address:
      "Số 400 Nguyễn Văn Cừ Nối dài, Phường An Bình, TP Cần Thơ (Địa chỉ cũ: Số 400 Nguyễn Văn Cừ Nối dài, An Bình, Ninh Kiều, TP Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/50629ca6-4781-48a6-b5bf-c3bc9b2b2a58-cdc-logo-final-2-120x120.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/6574a429-2447-4c5a-9534-1ba2cb019852-cdc-logo-final-2-120x120.png",
    ctas: null,
  },
  {
    id: "bvnhidong2",
    type: "hospital",
    name: "Bệnh viện Nhi Đồng 2",
    address:
      "14 Lý Tự Trọng, Phường Sài Gòn, TP.Hồ Chí Minh (Địa chỉ cũ: 14 Lý Tự Trọng, Bến Nghé, Quận 1, TP.HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/a0e24b47-705d-4c1e-9b69-9b7521315b3e-images.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/486045f8-7836-42a5-bf29-e3a77d1c8324-images.png",
    ctas: null,
  },
  {
    id: "bvyhctct",
    type: "hospital",
    name: "Bệnh viện Y học cổ truyền Cần Thơ",
    address:
      "Số 768 Đường 30/4, Phường Tân An, Thành Phố Cần Thơ (Địa chỉ cũ: Số 768 đường 30 tháng 04, Phường Hưng Lợi, Quận Ninh Kiều, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/1275c464-28a1-40cc-a60f-8b6d1b3e31f7-z6922256147287_1f222d661d8ef6f36668d5a6472b4234-removebg-preview.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/a77e686a-fa70-4360-be79-20d805c5d5fa-z6922256147287_1f222d661d8ef6f36668d5a6472b4234-removebg-preview.png",
    ctas: null,
  },
  {
    id: "drmarie2",
    type: "hospital",
    name: "Phòng Khám Sản Phụ Khoa Dr.Marie HCM02",
    address:
      "111 Nguyễn Thị Thập, Khu DC Him Lam, Phường Tân Hưng, Quận 7, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/b97f0fb2-5182-4917-a8f9-23ffd60df378-logo-dr.m-e1691395227295.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/6556e344-30c0-4f08-bf30-f689a4b2aad6-logo-dr.m-e1691395227295.png",
    ctas: null,
  },
  {
    id: "trungvuong",
    type: "hospital",
    name: "Bệnh viện Trưng Vương",
    address:
      "266 Lý Thường Kiệt, Phường Diên Hồng, TP.Hồ Chí Minh (Địa chỉ cũ: 266 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/trungvuong/web/logo.png?t=222222",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/9e2176ed-db14-4603-a594-8cefb4c4a2d0-logo-circle-trung-vuong.png",
    ctas: null,
  },
  {
    id: "pkmedfit",
    type: "hospital",
    name: "Phòng khám MedFit - Phòng khám giảm cân chuyên sâu",
    address:
      "462/2 Nguyễn Tri Phương, Phường Vườn Lài, TP. Hồ Chí Minh (Địa chỉ cũ: Số 462/2 đường Nguyễn Tri Phương, Phường 09, Quận 10, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/4e23e3de-5c90-48f4-bd0c-2dd7624b7903-logo_medfit_fix.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/85658934-1d8c-494a-a48b-63c30f0f4a32-logo_medfit_fix.png",
    ctas: null,
  },
  {
    id: "vietlifecs1",
    type: "hospital",
    name: "Phòng khám Đa khoa Vietlife - Cơ sở Sư Vạn Hạnh",
    address:
      "583 Sư Vạn Hạnh, Phường Hòa Hưng, TP Hồ Chí Minh (Địa chỉ cũ: 583 Sư Vạn Hạnh, Phường 12, Quận 10, TP Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/bf7a80ba-ffe4-4b4c-8560-96b9b6e793f9-z7416786470001_1fefcbd822589828954f31d74aefce62.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/c2de52e3-d348-438b-9efd-716b4365a429-z7416786470001_1fefcbd822589828954f31d74aefce62.jpg",
    ctas: null,
  },
  {
    id: "diag003",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận Phú Nhuận",
    address:
      "231 Hoàng Văn Thụ, Phường 8, Quận Phú Nhuận, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/b083e396-f8b9-470b-907c-715888415e8e-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/005eed22-d27e-4307-9478-1c3041d9a0e0-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "leloi",
    type: "hospital",
    name: "Bệnh viện Đa Khoa Vũng Tàu",
    address:
      "27 Đường 2/9, Phường Phước Thắng, TP. Hồ Chí Minh (Địa chỉ cũ: Số 27, Đường 2/9, Phường 11, Thành phố Vũng Tàu)",
    image:
      "https://cdn.medpro.vn/prod-partner/6f641a6b-9442-4e9a-b2d1-52e4e7a1dc20-logo_vt.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/eefd2d3d-dae7-4275-a2a1-b2ef46296b56-logo_vt.jpg",
    ctas: null,
  },
  {
    id: "ttphuongdong",
    type: "hospital",
    name: "Trung Tâm Mắt Quốc Tế Phương Đông",
    address:
      "71-73 Ngô Thời Nhiệm, phường Xuân Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: 71-73 Ngô Thời Nhiệm, phường Võ Thị Sáu, Quận 3, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/a1a543af-a13a-432f-8a17-e48f918f6abf-logo_phuioing_aoing_1.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/47dd5d96-348c-490f-9516-b410a4ae4cdb-logo_phuioing_aoing_1.png",
    ctas: null,
  },
  {
    id: "tasscare",
    type: "hospital",
    name: "Trung tâm xét nghiệm y khoa Tass Care",
    address:
      "Dịch vụ xét nghiệm tại nhà áp dụng khu vực TP.HCM và các khu vực lân cận Long An, Bình Dương.",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/tasscare/web/logo.png?t=123",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/tasscare/web/logo.png?t=123",
    ctas: null,
  },
  {
    id: "bvthongnhat",
    type: "hospital",
    name: "Bệnh viện Thống Nhất",
    address:
      "Số 1 Lý Thường Kiệt, Phường Tân Sơn Nhất, TP. Hồ Chí Minh (Địa chỉ cũ: Số 1 Lý Thường Kiệt, Phường 7, Quận Tân Bình, TP Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/b8c744bb-3743-4f59-aa13-ccd6631baa83-logo-benh-vien-thong-nhat.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/40865999-ede3-4479-a4e7-6ac6790a2194-logo-benh-vien-thong-nhat.png",
    ctas: null,
  },
  {
    id: "diag001",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 10",
    address: "414 - 420 Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/c4fc2d56-7a32-4f2c-902b-7c95854bff69-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/ca6bb88e-9d4d-46cb-bd62-3dc065e81fdd-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "ttykvanhanh",
    type: "hospital",
    name: "Trung Tâm Y Khoa Vạn Hạnh",
    address:
      "159 Trần Quốc Thảo, phường Nhiêu Lộc, TP. Hồ Chí Minh (Địa chỉ cũ: 159 Trần Quốc Thảo, Phường 9, Quận 3, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/3d998208-d7f0-478f-a632-49cf7537e54a-logo_y_khoa_van_hanh.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/50397ab2-abac-419b-b902-be1fab876374-logo_y_khoa_van_hanh.png",
    ctas: null,
  },
  {
    id: "diag010",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận Bình Tân",
    address:
      "101-103 Tên Lửa, Phường Bình Trị Đông B, Quận Bình Tân, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/a828615a-8ae8-41a5-9e1c-e72d8a7099dc-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/8ec7b8cb-0a43-4af2-bb6e-510d14962295-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pkremedy",
    type: "hospital",
    name: "Phòng Khám Phục Hồi Chức Năng Remedy Rehab & Care",
    address: "Tầng 9, 154 Nguyễn Thái Học, Ba Đình, Hà Nội",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/e431ad2f-e36e-4330-a520-e604d81e67ce-remedy_logo_copy.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/96996150-058e-45e0-91c1-2eed5b286898-remedy_logo_copy.png",
    ctas: null,
  },
  {
    id: "pkdkgolden",
    type: "hospital",
    name: "Phòng Khám Đa khoa Quốc Tế Golden Healthcare",
    address:
      "37 Hoàng Hoa Thám, phường Tân Bình, TP. Hồ Chí Minh (Địa chỉ cũ: Số 37 Hoàng Hoa Thám, P. 13, Q.Tân Bình, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/c22cfe55-487e-446a-a585-00993303511c-logo_golden_health_1.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/c193f647-068f-4052-9a80-6fcee6597f1c-logo_golden_health_1.png",
    ctas: null,
  },
  {
    id: "pxncsvt",
    type: "hospital",
    name: "Phòng Xét Nghiệm Y Khoa C-Star Vũng Tàu",
    address:
      "99A Đường 3/2, Phường 8, Thành Phố Vũng Tàu, Tỉnh Bà Rịa - Vũng Tàu",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/0c6102d7-d0b0-4a6b-9408-c0a55294e977-cstarframe_1000003525.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/442dee2b-1f8b-4e23-b068-6b4efde02605-cstarframe_1000003525.png",
    ctas: null,
  },
  {
    id: "1562",
    type: "hospital",
    name: "Chuyên khoa cơ xương khớp Việt Đức - Sài Gòn",
    address: "Số 161, Nguyễn Công Trứ, Phường Nguyễn Thái Bình, Quận 1, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/f4ccd19e-b203-4cca-a697-f90f37d6fb2d-logo1_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/e00ce13e-5549-4005-9069-015d10dd310f-logo1_(1).png",
    ctas: null,
  },
  {
    id: "diag022",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quang Trung",
    address: "829 Quang Trung, Phường 12, Quận Gò Vấp, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/0778f275-2c09-4b5e-8a49-f4ddd478bc14-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/c2a07c44-5ee6-46e7-931a-17c3cedff000-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "thanhvubl",
    type: "hospital",
    name: "Bệnh viện Đa khoa Thanh Vũ Medic Bạc Liêu",
    address:
      "Số 02DN, đường tránh Quốc lộ 1A, Khóm 21, Phường Bạc Liêu, Tỉnh Cà Mau",
    image:
      "https://cdn.medpro.vn/prod-partner/c125b033-ee27-41a7-aa81-ce3d16b5166e-thanhvubl-removebg-preview_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/4bb2812f-6010-4761-9ce3-88fc672efda1-thanhvubl-removebg-preview_(1).png",
    ctas: null,
  },
  {
    id: "pkkidfc",
    type: "hospital",
    name: "Phòng khám Tai Mũi Họng Kid & Family Care",
    address: "43 Đại lộ 2, Phước Bình, TP. Thủ Đức",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/1398bdf3-b5ac-4c88-bf47-f7ded5fd40e5-logo_fix.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/f5b65a08-eac3-47e9-a7fa-9eb0f6cebbeb-logo_fix.jpg",
    ctas: null,
  },
  {
    id: "nhidonghcm",
    type: "hospital",
    name: "Bệnh viện Nhi Đồng Thành Phố",
    address:
      "15 Võ Trần Chí, xã Tân Nhựt, TP.Hồ Chí Minh (Địa chỉ cũ: Số 15 Võ Trần Chí, Xã Tân Kiên, Huyện Bình Chánh, TP. Hồ Chí Minh)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/nhidonghcm/app/image/logo_circle.png?t=1111",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/nhidonghcm/app/image/logo_circle.png?t=1111",
    ctas: null,
  },
  {
    id: "bvlaophoict",
    type: "hospital",
    name: "Bệnh viện Lao và Bệnh phổi Cần Thơ",
    address:
      "Khu vực Bình Hòa A, Phường Phước Thới, Thành phố Cần Thơ (Địa chỉ cũ: KV. Bình Hòa A, Phường Phước Thới, Quận Ô Môn, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/f8a7b79c-0c40-46a5-9ac5-72e765f045c6-logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/bb19fb0b-8dc6-4646-8bd7-64d502c98842-logo.png",
    ctas: null,
  },
  {
    id: "medlatec",
    type: "hospital",
    name: "Phòng Khám Đa khoa Medlatec Hà Nội",
    address:
      "Số 2, ngõ 82 phố Duy Tân, Phường Cầu Giấy, TP.Hà Nội (Địa chỉ cũ: Số 2, ngõ 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/pkhbeta/web/logomedlatec.png?t=Thu%20Mar%2016%202023%2021:35:46%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/28e25452-946b-46be-91bb-cb2f5ef9176a-medlatec.jpg",
    ctas: null,
  },
  {
    id: "pksec",
    type: "hospital",
    name: "PK Mắt - Sunshine Eye Care",
    address: "51 Phạm Viết Chánh, P. Nguyễn Cư Trinh, Q.1, TP. Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/2bb8cfe3-eb91-4502-8cae-568fc0e6753f-sunshine-logo-mau-doc.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/01675e59-a7df-4439-bdd4-9701483dc9c8-sunshine-logo-mau-doc.png",
    ctas: null,
  },
  {
    id: "bvcxkvd",
    type: "hospital",
    name: "Bệnh viện Chuyên khoa cơ xương khớp Việt Đức - Hồ Chí Minh",
    address: "Số 359 Trần Hưng Đạo, Phường Cầu Kho , Quận 1, TP. Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/ee57c5a1-951c-44cc-a2e0-e7cadcd1dcbe-image-2024-03-13-09-23-26-395.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/45cec331-9dc3-443c-82ac-4e0917a4b342-image-2024-03-13-09-23-26-395.png",
    ctas: null,
  },
  {
    id: "diag020",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận Gò Vấp",
    address: "793 Nguyễn Kiệm, phường 3 quận Gò Vấp, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/8bb56763-ee7b-4429-b02d-74d0f1987fdd-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/d493f1b0-bd91-4de3-91a0-c15a6899e4f3-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "diag033",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Hóc Môn",
    address: "31/5 Quang Trung, Thị trấn Hóc Môn, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/d28f4d8c-8380-41eb-91a3-2f97b6e58be5-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/a29fdb93-d5b0-463b-b895-0354bddd2fbf-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "drmarie1",
    type: "hospital",
    name: "Phòng Khám Sản Phụ Khoa Dr.Marie HCM01",
    address: "307/15 Nguyễn Văn Trỗi, Phường 1, Quận Tân Bình, Tp. HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/48cd3a89-9276-4b67-9194-21fdf7cbe2fe-logo-dr.m-e1691395227295.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/e8743f09-aa92-4f3b-984a-76ae547eed42-logo-dr.m-e1691395227295.png",
    ctas: null,
  },
  {
    id: "bvquan1cs2",
    type: "hospital",
    name: "Bệnh viện Quận 1 - Cơ sở 2",
    address:
      "235 – 237 Trần Hưng Đạo, Phường Cầu Ông Lãnh, Thành phố Hồ Chí Minh (Địa chỉ cũ: 235 – 237 Trần Hưng Đạo, phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/4dbeab8b-8dbf-4387-b0ea-fd98b070f0f9-logo_bv_quaaoan_1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/ed9d18bb-8061-4386-bdca-1633d4d99875-logo_bv_quaaoan_1.jpg",
    ctas: null,
  },
  {
    id: "nhakhoablossom",
    type: "hospital",
    name: "Phòng Khám Nha Khoa Blossom (Nha khoa thẩm mỹ hiện đại đến từ Seoul) ",
    address:
      "Tòa nhà Blossom Beauty Medical Center, 119 - 121 Võ Văn Tần, phường Xuân Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: Tòa nhà Blossom Beauty Medical Center, 119 - 121 Võ Văn Tần, P. Võ Thị Sáu, Q. 3, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/d0a6de71-09c7-43a4-aa25-66e7ca8b034e-blossom_logo.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/1590470f-54d4-4380-a3b4-52a479bed45d-blossom_logo.png",
    ctas: null,
  },
  {
    id: "bvbuudien",
    type: "hospital",
    name: "Bệnh viện Bưu Điện",
    address:
      "Lô B9, Đ.Thành Thái, Phường Hòa Hưng, Thành phố Hồ Chí Minh (Địa chỉ cũ: Lô B9, Đ.Thành Thái, Phường 15, Quận 10, TP. HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/b37d0c5b-5eb4-421c-b78b-c09584b28696-pandt.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/028c8eca-f991-44e8-8d2a-fb3bd785b53a-pandt.png",
    ctas: null,
  },
  {
    id: "pkacc3",
    type: "hospital",
    name: "Phòng khám ACC Hà Nội",
    address:
      " Lầu 1 & 2 - Tòa nhà HDI Tower, 55 Lê Đại Hành, Phường Hai Bà Trưng, Hà Nội (Địa chỉ cũ: Lầu 1 & 2 - Tòa nhà HDI Tower, 55 Lê Đại Hành, Q.Hai Bà Trưng, Hà Nội)",
    image:
      "https://cdn.medpro.vn/prod-partner/810363c1-60d9-4f16-9028-ed487459d1ba-imgpsh_fullsize_anim11.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/748ccd8e-2253-4c22-bac3-6e440bd06a1f-imgpsh_fullsize_anim11.png",
    ctas: null,
  },
  {
    id: "pkdkivy",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Quốc Tế Ivy Health International Clinic",
    address: "120 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP HCM",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/08f1fa6b-5deb-4bdc-a6d6-ad350656d5a5-zyro-image_(12)_1.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/244e961a-2196-4dc7-bea4-ff6cfa0ca65a-zyro-image_(12)_1.png",
    ctas: null,
  },
  {
    id: "bvsante",
    type: "hospital",
    name: "Bệnh Viện Ngoại Khoa Sante",
    address:
      "11A Đinh Bộ Lĩnh, Phường Bình Thạnh, Thành phố Hồ Chí Minh (Địa chỉ cũ: 11A Đinh Bộ Lĩnh, Phường 24, Quận Bình Thạnh, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/7d1da2ac-bd3d-4ada-a2f6-1a42c3d106c7-bvsante_logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/f2773a82-8cf0-451c-8f9b-c34c44dc37e2-bvsante_logo.png",
    ctas: null,
  },
  {
    id: "novamed",
    type: "hospital",
    name: "Phòng Xét Nghiệm Y Khoa Novamed",
    address:
      "183 Trường Chinh, phường Phương Liệt, TP. Hà Nội (Địa chỉ cũ: Tầng 2, 183 Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/f823f458-101d-48f0-b3d1-0e0eb86447af-nova.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/9d8b5a0a-8b2b-4e4d-9147-058654d8f30a-logo_novamed.png",
    ctas: null,
  },
  {
    id: "pk115antam",
    type: "hospital",
    name: "Phòng Khám Bác Sĩ Gia Đình 115 An Tâm",
    address: "C4/12L/3, Phạm Hùng, Ấp 4 xã Bình Hưng, huyện Bình Chánh, TPHCM",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/21575ef9-bd91-407c-8d9b-d23641922146-z4685537336994_05a3350e0fa8845293ad112327348119.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/55fb0d0a-b9e0-4912-88b0-e4c09a73db5e-z4685537336994_05a3350e0fa8845293ad112327348119.jpg",
    ctas: null,
  },
  {
    id: "ttytthoilai",
    type: "hospital",
    name: "Trung tâm Y tế khu vực Thới Lai",
    address:
      "Ấp Thới Phong A, Xã Thới Lai, Thành phố Cần Thơ (Địa chỉ cũ: Ấp Thới Phong A, TT. Thới Lai, H. Thới Lai, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/ae7d3307-7cf0-49bb-b608-3993f85dbfdf-logo.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/163c6b2e-2cda-45a5-8f39-62b910f0806f-logo.png",
    ctas: null,
  },
  {
    id: "bvungbuouct",
    type: "hospital",
    name: "Bệnh Viện Ung Bướu Thành Phố Cần Thơ",
    address:
      "4 Châu Văn Liêm, Phường Ninh Kiều, Thành phố Cần Thơ (Địa chỉ cũ: 4 Châu Văn Liêm, Tân An, Ninh Kiều, Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/4a7b8e90-7fe1-4099-a074-16f6fc397d5e-images_(1).jfif",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/e4175d42-3883-4ddf-b602-01162a644da3-images_(1).jfif",
    ctas: null,
  },
  {
    id: "pkmenhealth",
    type: "hospital",
    name: "Trung Tâm Sức Khỏe Nam giới Men's Health",
    address:
      "7B/31 Thành Thái, Phường Diên Hồng, TP. Hồ Chí Minh (Địa chỉ cũ: 7B/31 Thành Thái, P14, Quận 10, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/cd5cb4e2-729b-473f-a871-00b49fea875d-logo_menhealth_1.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/c38317de-f8f1-42c8-acf1-c1321a11a27e-logo_menhealth_1.png",
    ctas: null,
  },
  {
    id: "pksontam",
    type: "hospital",
    name: "Phòng khám Chuyên khoa Tâm thần Sơn Tâm",
    address:
      "702/121 Điện Biên Phủ, Phường Vườn Lài, Thành Phố Hồ Chí Minh (Địa chỉ cũ: 702/121 Điện Biên Phủ, Phường 10, Quận 10, Thành Phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/abd04e6e-5c0f-48cf-b166-a517637e7e90-logosontam-scaled.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/aef63e2b-26a7-4ed5-8c64-aa4afa52abd7-logosontam-scaled.png",
    ctas: null,
  },
  {
    id: "diag019",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 2",
    address: "158 Trần Não, Phường Bình An, Quận 2, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/9b2c051f-d999-47c1-8e6e-a8675fdd0fa5-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/821e7a77-8737-4700-92c2-e0fc67bdf174-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pksospqat",
    type: "hospital",
    name: "Phòng Khám Đa Khoa S.O.S Phú Quốc - Cơ Sở 2",
    address:
      " 243 Nguyễn Văn Cừ, Tổ 6, Khu Phố 8, Phường An Thới, TP. Phú Quốc, Tỉnh Kiên Giang",
    image:
      "https://cdn.medpro.vn/prod-partner/b1fc08b7-e894-4450-9cb2-0b45fc3f3729-logo_(1).jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/d1e399d1-834e-4ea6-bf8e-b8fa02fffd1c-logo_(1).jpg",
    ctas: null,
  },
  {
    id: "pkcxkpba",
    type: "hospital",
    name: "Phòng Khám Cơ Xương Khớp Phúc Bình An",
    address: "88 Lê Đức Thọ, Phường 6, Gò Vấp",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/34036401-b519-4f12-bde6-390b5244a728-frame_1000004357.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/f46ff88d-f6e5-492e-8669-b464988cdc55-frame_1000004357.png",
    ctas: null,
  },
  {
    id: "bvnhidongct",
    type: "hospital",
    name: "Bệnh viện Nhi đồng Thành phố Cần Thơ",
    address:
      "Số 345 Nguyễn Văn Cừ, Phường An Bình, Thành phố Cần Thơ (Địa chỉ cũ: Số 345 Nguyễn Văn Cừ, P.An Bình, Q.Ninh Kiều, TP.Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/d275b022-d8c3-44ac-9330-5d31c8cddb4c-images_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/566f02cc-65a3-4ae9-921d-1bc6a5635b68-images_(1).png",
    ctas: null,
  },
  {
    id: "pkdymhn",
    type: "hospital",
    name: "DYM Medical Center Hà Nội",
    address:
      "Tầng Hầm B1, Toà Epic Tower, Ngõ 19 Duy Tân, Phường Cầu Giấy, TP. Hà Nội (Địa chỉ cũ: Tầng hầm B1, tòa Epic Tower, ngõ 19 Duy Tân, Phường Mỹ Đình 2, Quận Nam Từ Liêm, TP Hà Nội)",
    image:
      "https://cdn.medpro.vn/prod-partner/d1ae64e8-b41e-4632-baa9-f59b6d13be1a-picture1_(2).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/52de9b95-c3c3-4b25-8926-6e0823d10af6-picture1_(2).png",
    ctas: null,
  },
  {
    id: "diag036",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Long An",
    address: "129 Nguyễn Đình Chiểu, Phường 1, Thành phố Tân An, Tỉnh Long An",
    image:
      "https://cdn.medpro.vn/prod-partner/d8379383-eaa1-4e2d-bd8e-28be6455817d-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/fddbf744-b3c1-4423-aa30-6b58d1a801ed-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pknovagendn",
    type: "hospital",
    name: "Trung tâm xét nghiệm ADN NOVAGEN -  Đà Nẵng",
    address: "Tầng 2, số 518 đường 2 tháng 9, Phường Hòa Cường, TP. Đà Nẵng",
    image:
      "https://cdn.medpro.vn/prod-partner/7fd77807-4790-42bd-a6ea-b7d5e5f812cb-cffff568-31f6-4cd6-87ea-31df700551b6-logo_roaapoundaang_vieaaaan_laaam_ava.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/7e94d56a-cbb6-40a6-a5a1-8c57a28ba0dd-cffff568-31f6-4cd6-87ea-31df700551b6-logo_roaapoundaang_vieaaaan_laaam_ava.jpg",
    ctas: null,
  },
  {
    id: "medpadiag",
    type: "hospital",
    name: "Phòng Khám Đa Khoa MedPaDiag",
    address:
      "141 Đường Trần Bình Trọng, Phường Chợ Quán, Thành phố Hồ Chí Minh (Địa chỉ cũ: 141 Đường Trần Bình Trọng, Phường 2, Quận 5, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/753b7a3b-21dd-42d9-930b-034e6e5f5d7b-image-2025-12-09-14-11-35-381.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/c2657cfb-27fe-4d14-95b0-8b68fd89b579-image-2025-12-09-14-11-35-381.png",
    ctas: null,
  },
  {
    id: "bvhongha",
    type: "hospital",
    name: "Bệnh viện đa khoa Hồng Hà",
    address: "16 Nguyễn Như Đổ - Văn Miếu - Đống Đa - Hà Nội",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/dffe4e92-3109-4529-8994-5f96a7e37d13-haaang_haa_.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/45d461c4-3948-472f-9f21-041db10419e5-haaang_haa_.png",
    ctas: null,
  },
  {
    id: "bvhmcuulong",
    type: "hospital",
    name: "Bệnh viện Đa khoa Hoàn Mỹ Cửu Long",
    address:
      "Lô 20 Võ Nguyên Giáp, Phường Hưng Phú, TP. Cần Thơ (Địa chỉ cũ: Lô 20 Võ Nguyên Giáp, Phường Phú Thứ, Quận Cái Răng, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/34be4d96-eac5-47fd-b143-3c811862eb5b-logo.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/d865dc27-6724-4c1d-9950-3da6cf1aec31-logo.jpg",
    ctas: null,
  },
  {
    id: "pkcknmyna",
    type: "hospital",
    name: "Phòng khám Nhi BS Võ Thị My Na",
    address:
      "2/41 Đường ĐT 743B, Khu Phố Bình Đức, Phường Bình Hòa , Thành Phố Thuận An, Tỉnh Bình Dương",
    image:
      "https://cdn.medpro.vn/prod-partner/c9341635-070c-4184-a471-26c0514b4d95-my_na_logo_(1)_(1).png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/ce349e70-6bb3-47a3-8bf2-e88dd5c68f7a-my_na_logo_(1)_(1).png",
    ctas: null,
  },
  {
    id: "pkbsgdhw",
    type: "hospital",
    name: "PHÒNG KHÁM BÁC SĨ GIA ĐÌNH HEALTHY WORLD",
    address: "Số 6 Cô Bắc, Phường 02, Phú Nhuận, TP.Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/3dc01640-12ac-4b83-82b6-28178bd06b10-logo_anh_tri.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/fc6aec69-2c0c-43fd-a9e7-71dcecbefdbc-logo_anh_tri.png",
    ctas: null,
  },
  {
    id: "diag026",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 4",
    address: "239 Khánh Hội, Phường 5, Quận 4, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/10a86d37-5146-4b46-bc80-efa66deee110-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/74c8f00f-ced7-42f0-9aad-714178167661-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "vietuchanoi",
    type: "hospital",
    name: "Phòng Khám Gia Đình Việt Úc - Hà Nội",
    address:
      "Căn số 30 Lô 1A Khu đô thị mới Trung Yên, Trung Yên 11B, Trung Hòa, Cầu Giấy, Hà Nội",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/99026fb6-1218-42ba-84bc-a8712d20ced4-logo-vietuc.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/852ffc11-ac86-4300-9c2e-f4984d654ccf-logo-vietuc.png",
    ctas: null,
  },
  {
    id: "bvpsct",
    type: "hospital",
    name: "Bệnh viện Phụ sản Thành Phố Cần Thơ",
    address:
      "106 Cách Mạng Tháng Tám, Phường Cái Khế, TP. Cần Thơ (Địa chỉ cũ: 106 Cách Mạng Tháng Tám, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/88db2c0f-c134-428e-9fb6-0cb043214cd9-logo-ps-900.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/7e925233-43eb-49b1-a40b-ab66537147ce-logo-ps-900.png",
    ctas: null,
  },
  {
    id: "bvnd115",
    type: "hospital",
    name: "Bệnh viện Nhân Dân 115",
    address:
      "527 Sư Vạn Hạnh, Phường Hòa Hưng, Thành phố Hồ Chí Minh (Địa chỉ cũ: 527 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/dd396389-8755-4942-ad6c-c9ba3d4337c0-logo-benh-vien-nhan-dan-115.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/54752409-33d3-498f-a4ae-00fef667678e-logo-bv-nhan-dan-115-circle.jpg",
    ctas: null,
  },
  {
    id: "gensolution",
    type: "hospital",
    name: "Trung Tâm Xét Nghiệm Gene Solutions",
    address:
      "186-188 Nguyễn Duy Dương, phường Vườn Lài, TP. Hồ Chí Minh (Địa chỉ cũ: 110 Nguyễn Chí Thanh, Phường 3, Quận 10, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/58108b87-77f7-45c2-85ae-9068813d3fcf-gen_solution.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/09b22cd9-254c-40a2-85a7-b16d6efeb3a0-gen_solution.png",
    ctas: null,
  },
  {
    id: "bvfv",
    type: "hospital",
    name: "Bệnh viện FV (FV Hospital)",
    address:
      "6 Nguyễn Lương Bằng, Phường Tân Mỹ, TP. Hồ Chí Minh (Địa chỉ cũ: Số 6 Nguyễn Lương Bằng, P.Tân Phú, Quận 7, Tp.HCM)",
    image:
      "https://cdn.medpro.vn/prod-partner/2c03fcb6-5c64-4df8-858b-47ec089ff643-screenshot_2025-07-21_132746.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/4dfab8a9-e9bf-45f7-96fe-3230f64c4363-screenshot_2025-07-21_132746.png",
    ctas: null,
  },
  {
    id: "pkdkqtsglevanluong",
    type: "hospital",
    name: "Phòng khám Đa khoa Quốc tế Sài Gòn - Chi nhánh Lê Văn Lương",
    address: "441 Lê Văn Lương, Phường Tân Hưng, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/bdca2530-ce80-44e5-b502-17886e6ac423-logo_sig.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/2bfc1bc3-dda0-4653-b83a-4cedbad40b35-logo_sig.png",
    ctas: null,
  },
  {
    id: "pkvmcgv",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Việt Mỹ Gò Vấp - VIET MY CLINIC",
    address: "Số 187A Phạm Văn Chiêu, P.14, Q.Gò Vấp, Tp.HCM",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/cfbb7671-d01b-4ac1-8028-b5b4d801f737-zyro-image_(10)_1.png",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/c1b13958-991c-4975-9055-fda88746bc16-zyro-image_(10)_1.png",
    ctas: null,
  },
  {
    id: "diag006",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 7",
    address:
      "198 Nguyễn Thị Thập, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/8f816529-36a5-460a-8e65-23ea4cd89a22-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/3350d276-7041-446b-963a-608593960a51-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pxnbaoanh",
    type: "hospital",
    name: "Trung Tâm Xét Nghiệm Bảo Anh",
    address:
      "20 Tăng Bạt Hổ, phường Chợ Lớn, TP. Hồ Chí Minh (Địa chỉ cũ: 20 Tăng Bạt Hổ, Phường 12, Quận 5, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/b8037c25-9016-411b-874e-f6ed1968d6b7-bao_anh.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/792df506-190d-483f-bf42-33dc89c49b67-bao_anh.png",
    ctas: null,
  },
  {
    id: "chac",
    type: "hospital",
    name: "Trung Tâm Chăm Sóc Sức Khoẻ Cộng Đồng - CHAC",
    address:
      "110A Ngô Quyền, phường An Đông, TP. Hồ Chí Minh (Địa chỉ cũ: 110A Ngô Quyền, phường 8, quận 5, TP.HCM)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/chac/web/logo.png?1671769876976?t=Fri%20Dec%2023%202022%2011:31:16%20GMT+0700%20(Indochina%20Time)",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/chac/web/logo.png?1671769876976?t=Fri%20Dec%2023%202022%2011:31:16%20GMT+0700%20(Indochina%20Time)",
    ctas: null,
  },
  {
    id: "pkdkthienphuoc",
    type: "hospital",
    name: "Phòng Khám Đa Khoa Loukas",
    address:
      "269 Điện Biên Phủ, phường Xuân Hòa, TP. Hồ Chí Minh (Địa chỉ cũ: 269 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/fd5e5086-917c-491b-91b6-0f9d3968ea3d-loukas.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/e70bb75c-7762-4279-b033-6877883a0179-loukas.png",
    ctas: null,
  },
  {
    id: "pkdkdha",
    type: "hospital",
    name: "Phòng khám đa khoa DHA Health Care",
    address:
      "221 - 221 Bis Nguyễn Thị Minh Khai, P Nguyễn Cư Trinh, Q1, TP.HCM",
    image:
      "https://cdn-pkh.longvan.net/prod-partner/933ddc31-730f-43b4-8889-59c4bb73020e-dha.jpg",
    circleLogo:
      "https://cdn-pkh.longvan.net/prod-partner/a733b964-f3b3-48b2-8a86-344fcaba3152-dha.jpg",
    ctas: null,
  },
  {
    id: "pkacc1",
    type: "hospital",
    name: "Phòng khám ACC Bến Thành - HCM",
    address:
      "99 Nguyễn Du, P. Bến Thành, TP.HCM (Địa chỉ cũ: 99 Nguyễn Du, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/5dfc30e2-fea2-4fdc-92d9-3766230e39d0-imgpsh_fullsize_anim11.png",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/8fdee51e-68d3-4cc0-a49e-5ff2a35ea4b2-imgpsh_fullsize_anim11.png",
    ctas: null,
  },
  {
    id: "nhidong1",
    type: "hospital",
    name: "Bệnh viện Nhi Đồng 1",
    address:
      "341 Sư Vạn Hạnh, Phường Vườn Lài, TP.Hồ Chí Minh (Địa chỉ cũ: 341 Sư Vạn Hạnh, Phường 10, Quận 10, TP.HCM)",
    image:
      "https://bo-api.medpro.com.vn:5000/static/images/nhidong1/app/image/logo_circle.png?t=11111",
    circleLogo:
      "https://bo-api.medpro.com.vn:5000/static/images/nhidong1/app/image/logo_circle.png?t=11111",
    ctas: null,
  },
  {
    id: "diag039",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 6",
    address: "375 Nguyễn Văn Luông, Phường 12, Quận 6, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/020faf7a-23d0-4650-b622-b87ac6f12c1f-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/0711c685-4146-4a6e-b304-b72cbda5ebad-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "pknamansomeco",
    type: "hospital",
    name: "Phòng khám YHCT Nam An Someco - Trung tâm y khoa Chiropractic",
    address: "102 Hùng Vương, Phường 1, Quận 10",
    image:
      "https://cdn.medpro.vn/prod-partner/e9be87b3-5384-45d3-83b5-36f79e53f922-logo.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/99635fa6-fc2c-4539-8205-5e78b7e96ef9-logo.jpg",
    ctas: null,
  },
  {
    id: "bvanviet",
    type: "hospital",
    name: "Bệnh Viện Đa Khoa An Việt",
    address:
      "Số 1E Trường Chinh, Phường Tương Mai, Thành phố Hà Nội (Địa chỉ cũ: Số 1E Trường Chinh, Thanh Xuân, Hà Nội)",
    image:
      "https://prod-partner.s3-hcm-r1.longvan.net/076f68b1-2f13-408c-894a-0f89dbc8e54e-an_viet_logo.png",
    circleLogo:
      "https://prod-partner.s3-hcm-r1.longvan.net/5da0442b-4bb4-47ff-bb9d-4380c4f49658-an_viet_logo.png",
    ctas: null,
  },
  {
    id: "pkdatranthinh",
    type: "hospital",
    name: "Phòng khám Chuyên Khoa Da Trần Thịnh",
    address: "980 Trần Hưng Đạo, Phường 7, Quận 5, TP.HCM",
    image:
      "https://cdn.medpro.vn/prod-partner/06261e2a-4b82-49ba-982a-2a463782097e-z5274144904010_9e6975d56daf7823892e68075e23a9d2.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/78b1d77d-7802-4c86-83c8-071ab386826e-z5274144904010_9e6975d56daf7823892e68075e23a9d2.jpg",
    ctas: null,
  },
  {
    id: "diag018",
    type: "hospital",
    name: "Trung tâm xét nghiệm và chẩn đoán Y khoa Diag - Quận 1",
    address: "53 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
    image:
      "https://cdn.medpro.vn/prod-partner/623d6f21-2e78-4952-abc7-1dc3f9c87f1f-social-preview-1.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/0206ed08-009a-4aa1-9b3c-97019d689c29-social-preview-1.jpg",
    ctas: null,
  },
  {
    id: "vietlifecs2",
    type: "hospital",
    name: "Phòng khám Đa khoa Vietlife - Cơ sở Nguyễn Chí Thanh",
    address:
      "189A-189B Nguyễn Chí Thanh, Phường Chợ Lớn, TP Hồ Chí Minh (Địa chỉ cũ: 189A-189B Nguyễn Chí Thanh, Phường 12, Quận 5, TP Hồ Chí Minh)",
    image:
      "https://cdn.medpro.vn/prod-partner/679b398c-a5b0-46bb-a39a-a596e806ec02-z7416786470001_1fefcbd822589828954f31d74aefce62.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/b0628ff6-0dfa-4f31-a0fb-d0cca022ef9d-z7416786470001_1fefcbd822589828954f31d74aefce62.jpg",
    ctas: null,
  },
  {
    id: "bvdkomonct",
    type: "hospital",
    name: "Trung tâm Y tế Khu vực Ô Môn",
    address:
      "Số 83, CMT8, P. Ô Môn, TP. Cần Thơ (Địa chỉ cũ: Số 83, CMT8, P. Châu Văn Liêm, Q. Ô Môn, TP. Cần Thơ)",
    image:
      "https://cdn.medpro.vn/prod-partner/561b8194-4686-4d94-9881-10a4f3957a68-z6925985934255_0289ca84b9ff2d5a1c02720762cd256c.jpg",
    circleLogo:
      "https://cdn.medpro.vn/prod-partner/5cc49d2b-f438-47f9-b505-31b3ce8a04b0-z6925985934255_0289ca84b9ff2d5a1c02720762cd256c.jpg",
    ctas: null,
  },
];
