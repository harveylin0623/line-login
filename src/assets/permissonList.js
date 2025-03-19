export default [
  {
    'moduleName': 'permissionModule',
    'permissions': {
      'account': {
        'display': [
          'accountDisplay'
        ],
        'create': [
          'createUser'
        ],
        'modify': [
          'updateUser',
          'resetUserPassword',
          'updateUserStatus'
        ]
      },
      'role': {
        'display': [
          'roleDisplay'
        ],
        'create': [
          'createRole'
        ],
        'modify': [
          'updateRole'
        ],
        'delete': [
          'deleteRole'
        ]
      }
    },
    'sort': 1
  },
  {
    'moduleName': 'dashboard',
    'permissions': {
      'dashboard': {
        'display': [
          'memberDashboard',
          'memberTransactionDashboard',
          'memberTransactionModelDashboard'
        ]
      }
    },
    'sort': 2
  },
  {
    'moduleName': 'memberModule',
    'permissions': {
      'member': {
        'display': [
          'memberDisplay'
        ],
        'modify': [
          'updateMember',
          'deactivateMember',
          'lockMember',
          'unlockMember',
          'verifyUnverifiedMember',
          'setLevelForMember',
          'allocatePointsToMember',
          'deductPointsFromMember',
          'deductPointsFromMemberInExchangeForDiscount',
          'allocateMemberTickets',
          'updateIssuedTickets',
          'pickup',
          'unmaskProfile',
          'updateMemberMobile',
          'updateMemberPassword',
          'clearMemberSummaryCache'
        ],
        'export': [
          'exportMember',
          'exportOneMemberLevelRecord',
          'exportOneMemberPointRecord',
          'exportOneMemberTicketRecord',
          'exportOneMemberTransactionRecord'
        ]
      },
      'memberAttribute': {
        'display': [
          'memberAttributeDisplay'
        ],
        'modify': [
          'updateMemberAttribute'
        ]
      },
      'memberBriefTerm': {
        'display': [
          'memberBriefTermDisplay'
        ],
        'create': [
          'createBriefTerm',
          'createBriefTermContent'
        ],
        'modify': [
          'updateBriefTermContent'
        ],
        'delete': [
          'deleteBriefTerm',
          'deleteBriefTermContents'
        ],
        'review': [
          'reviewBriefTermContent'
        ],
        'enable': [
          'enableBriefTermContent'
        ]
      },
      'memberSms': {
        'display': [
          'memberSmsDisplay'
        ],
        'modify': [
          'getSMSVerificationCode'
        ]
      },
      'memberAdvancedFilter': {
        'display': [
          'searchMemberAdvancedFilter',
          'findMemberAdvancedFilter'
        ],
        'create': [
          'createMemberAdvancedFilter'
        ],
        'export': [
          'exportMemberAdvancedFilter'
        ]
      },
      'memberRecommendStats': {
        'display': [
          'searchMemberRecommendStats'
        ]
      }
    },
    'sort': 3
  },
  {
    'moduleName': 'pushInboxModule',
    'permissions': {
      'pushInbox': {
        'display': [
          'pushInboxDisplay'
        ],
        'create': [
          'createInboxMessage'
        ],
        'modify': [
          'updateInboxMessage',
          'stopBatchPushTask'
        ],
        'delete': [
          'deleteInboxMessages'
        ],
        'review': [
          'reviewInboxMessages'
        ],
        'enable': [
          'enableInboxMessages'
        ]
      },
      'lineInbox': {
        'display': [
          'InboxLineMessageDisplay',
          'findInboxLineMessage'
        ],
        'create': [
          'createInboxLineMessage'
        ],
        'modify': [
          'updateInboxLineMessage',
          'stopBatchLinePushTask',
          'archiveInboxLineMessage'
        ],
        'delete': [
          'deleteInboxLineMessages'
        ],
        'review': [
          'reviewInboxLineMessages'
        ],
        'enable': [
          'enableInboxLineMessages'
        ]
      }
    },
    'sort': 4
  },
  {
    'moduleName': 'memberCardModule',
    'permissions': {
      'memberCard': {
        'display': [
          'memberCardDisplay'
        ],
        'create': [
          'createMemberCardType',
          'createIssuedMemberCard'
        ],
        'modify': [
          'updateMemberCardType',
          'updateIssuedMemberCardBatch',
          'updateIssuedMemberCards'
        ],
        'delete': [
          'deleteMemberCardTypes'
        ],
        'export': [
          'exportMemberCard'
        ],
        'review': [
          'reviewMemberCardTypes'
        ],
        'enable': [
          'enableMemberCardTypes'
        ]
      },
      'memberCardRecord': {
        'display': [
          'memberCardRecordDisplay'
        ],
        'export': [
          'exportMemberCardRecord'
        ]
      }
    },
    'sort': 5
  },
  {
    'moduleName': 'memberTransactionModule',
    'permissions': {
      'memberTransaction': {
        'display': [
          'memberTransactionDisplay'
        ],
        'create': [
          'createMemberTransaction'
        ],
        'export': [
          'exportMemberTransaction'
        ]
      }
    },
    'sort': 6
  },
  {
    'moduleName': 'membershipLevelModule',
    'permissions': {
      'membershipLevel': {
        'display': [
          'membershipLevelDisplay'
        ],
        'create': [
          'createLevel'
        ],
        'modify': [
          'updateLevel'
        ],
        'delete': [
          'deleteLevels'
        ],
        'review': [
          'reviewLevel'
        ],
        'enable': [
          'enableLevel'
        ]
      },
      'membershipLevelRule': {
        'display': [
          'membershipLevelRuleDisplay'
        ],
        'create': [
          'createRule'
        ],
        'modify': [
          'updateRule'
        ],
        'delete': [
          'deleteRules'
        ],
        'review': [
          'reviewRule'
        ],
        'enable': [
          'enableRule'
        ]
      },
      'membershipLevelRecord': {
        'display': [
          'membershipLevelRecordDisplay'
        ],
        'export': [
          'exportMembershipLevelRecord'
        ]
      }
    },
    'sort': 7
  },
  {
    'moduleName': 'memberPointModule',
    'permissions': {
      'memberPointType': {
        'display': [
          'memberPointTypeDisplay'
        ],
        'create': [
          'createPointType',
          'createThirdPartyPointType'
        ],
        'modify': [
          'updatePointType',
          'updateThirdPartyPointType'
        ],
        'delete': [
          'deletePointTypes',
          'deleteThirdPartyPointTypes'
        ],
        'review': [
          'reviewPointType'
        ],
        'enable': [
          'enablePointType'
        ]
      },
      'memberRuleAllocation': {
        'display': [
          'memberRuleAllocationDisplay'
        ],
        'create': [
          'createAllocationRule'
        ],
        'modify': [
          'updateAllocationRule'
        ],
        'delete': [
          'deleteAllocationRules'
        ],
        'review': [
          'reviewAllocationRule'
        ],
        'enable': [
          'enableAllocationRule'
        ]
      },
      'memberRuleDeduction': {
        'display': [
          'memberRuleDeductionDisplay'
        ],
        'create': [
          'createDeductionRule'
        ],
        'modify': [
          'updateDeductionRule'
        ],
        'delete': [
          'deleteDeductionRules'
        ],
        'review': [
          'reviewDeductionRule'
        ],
        'enable': [
          'enableDeductionRule'
        ]
      },
      'memberPointTransactionRecord': {
        'display': [
          'memberPointTransactionRecordDisplay'
        ],
        'export': [
          'exportMemberPointTransactionRecord',
          'exportMemberPointSummary'
        ]
      },
      'memberPointExport': {
        'display': [
          'memberPointExportDisplay'
        ]
      },
      'memberPointExchangeRule': {
        'display': [
          'searchMemberPointExchangeRule'
        ],
        'create': [
          'createMemberPointExchangeRule'
        ],
        'modify': [
          'updateMemberPointExchangeRule'
        ],
        'delete': [
          'deleteMemberPointExchangeRule'
        ]
      }
    },
    'sort': 8
  },
  {
    'moduleName': 'memberTicketModule',
    'permissions': {
      'memberTicket': {
        'display': [
          'memberTicketDisplay'
        ],
        'create': [
          'createTicket',
          'createIssuedTickets'
        ],
        'modify': [
          'updateTicket'
        ],
        'delete': [
          'deleteTickets'
        ],
        'export': [
          'exportIssuedTicket'
        ],
        'review': [
          'reviewTicket'
        ],
        'enable': [
          'enableTicket'
        ]
      },
      'memberTicketRecord': {
        'display': [
          'memberTicketRecordDisplay'
        ],
        'export': [
          'exportMemberTicketRecord'
        ]
      },
      'memberTicketTransferRecord': {
        'display': [
          'memberTicketTransferRecordDisplay'
        ],
        'export': [
          'exportMemberTicketTransferRecord'
        ]
      },
      'memberTicketReport': {
        'display': [
          'memberTicketRedeemRecordReportDisplay',
          'memberTicketRedeemDetailRecordReportDisplay'
        ]
      },
      'voucher': {
        'display': [
          'voucherDisplay',
          'voucherStatisticsDisplay'
        ],
        'create': [
          'createVoucher'
        ],
        'modify': [
          'updateVoucher'
        ],
        'delete': [
          'deleteVouchers'
        ],
        'review': [
          'reviewVoucher'
        ],
        'enable': [
          'enableVoucher'
        ]
      },
      'voucherBox': {
        'display': [
          'voucherBoxDisplay'
        ],
        'create': [
          'createVoucherBox'
        ],
        'modify': [
          'updateVoucherBox'
        ],
        'delete': [
          'deleteVoucherBoxes'
        ]
      },
      'issuedVoucherTransactionRecord': {
        'display': [
          'issuedVoucherTransactionRecordDisplay'
        ],
        'export': [
          'exportIssuedVoucherTransactionRecord'
        ]
      },
      'issuedVoucherTransferRecord': {
        'display': [
          'issuedVoucherTransferRecordDisplay'
        ],
        'export': [
          'exportIssuedVoucherTransferRecord'
        ]
      },
      'externalTicket': {
        'display': [
          'externalTicketDisplay',
          'searchExternalTicket',
          'searchExternalTicketIssuedRecord'
        ],
        'create': [
          'createExternalTicket'
        ],
        'modify': [
          'updateExternalTicket'
        ]
      }
    },
    'sort': 9
  },
  {
    'moduleName': 'memberFilterModule',
    'permissions': {
      'memberFilter': {
        'display': [
          'memberFilterDisplay'
        ],
        'create': [
          'createMemberFilter'
        ],
        'modify': [
          'updateMemberFilter',
          'triggerMemberFilter'
        ],
        'delete': [
          'deleteMemberFilters'
        ],
        'review': [
          'reviewMemberFilters'
        ],
        'enable': [
          'enableMemberFilters'
        ]
      },
      'memberTagFilter': {
        'display': [
          'memberTagFilterDisplay',
          'findMemberTagFilter'
        ],
        'create': [
          'createMemberTagFilter'
        ],
        'modify': [
          'updateMemberTagFilter',
          'triggerMemberTagFilter'
        ],
        'delete': [
          'deleteMemberTagFilters'
        ]
      }
    },
    'sort': 10
  },
  {
    'moduleName': 'memberListModule',
    'permissions': {
      'memberList': {
        'display': [
          'memberListDisplay'
        ],
        'create': [
          'createMemberList',
          'createMemberListBatch'
        ],
        'delete': [
          'deleteMemberLists',
          'deleteMemberListBatch'
        ],
        'export': [
          'exportMemberList'
        ]
      }
    },
    'sort': 11
  },
  {
    'moduleName': 'memberCampaignModule',
    'permissions': {
      'memberCampaign': {
        'display': [
          'memberCampaignDisplay'
        ],
        'create': [
          'createMemberCampaign'
        ],
        'modify': [
          'updateMemberCampaign',
          'triggerMemberCampaign'
        ],
        'delete': [
          'deleteMemberCampaigns'
        ],
        'export': [
          'exportMemberCampaignStatus'
        ],
        'review': [
          'reviewMemberCampaign'
        ],
        'enable': [
          'enableMemberCampaign'
        ]
      }
    },
    'sort': 12
  },
  {
    'moduleName': 'pickupActivityModule',
    'permissions': {
      'pickupActivityCategory': {
        'display': [
          'pickupActivityCategoryDisplay'
        ],
        'create': [
          'createPickupActivityCategory'
        ],
        'modify': [
          'updatePickupActivityCategory'
        ],
        'delete': [
          'deletePickupActivityCategories'
        ]
      },
      'pickupActivity': {
        'display': [
          'pickupActivityDisplay',
          'pickupActivityVoucherStatusDisplay'
        ],
        'create': [
          'createPickupActivity'
        ],
        'modify': [
          'updatePickupActivity'
        ],
        'delete': [
          'deletePickupActivities'
        ],
        'export': [
          'exportPickupCode'
        ],
        'review': [
          'reviewPickupActivity'
        ],
        'enable': [
          'enablePickupActivity'
        ]
      },
      'pickupActivityRecord': {
        'display': [
          'pickupActivityRecordDisplay'
        ],
        'export': [
          'exportPickupActivityRecord'
        ]
      },
      'pickupActivityReport': {
        'display': [
          'memberTicketIssueReportDisplay',
          'memberTicketIssueDetailReportDisplay'
        ]
      }
    },
    'sort': 13
  },
  {
    'moduleName': 'codeGeneratorModule',
    'permissions': {
      'codeGenerator': {
        'display': [
          'codeGeneratorDisplay'
        ],
        'create': [
          'createCodeGenerator'
        ],
        'modify': [
          'updateCodeGenerator'
        ],
        'delete': [
          'deleteCodeGenerators'
        ],
        'review': [
          'reviewCodeGenerators'
        ],
        'enable': [
          'enableCodeGenerators'
        ]
      },
      'externalCodeGenerator': {
        'display': [
          'externalCodeGeneratorDisplay'
        ],
        'create': [
          'createExternalCodeGenerator'
        ],
        'modify': [
          'updateExternalCodeGenerator',
          'updateExternalCodeGeneratorsBrandFields'
        ],
        'delete': [
          'deleteExternalCodeGenerators'
        ]
      },
      'externalCodeGeneratorOrder': {
        'display': [
          'externalCodeGeneratorOrderDisplay'
        ]
      }
    },
    'sort': 14
  },
  {
    'moduleName': 'cmsModule',
    'permissions': {
      'cms': {
        'display': [
          'cmsDisplay',
          'cmsHomeFullPageAdDisplay',
          'cmsHomeCarouselAdDisplay',
          'cmsNewsDisplay',
          'cmsPromoDisplay',
          'cmsEdmDisplay',
          'cmsFaqDisplay',
          'cmsBookDisplay',
          'cmsProjectReserved1Display',
          'cmsHomeFullPageAdVideoUpload',
          'cmsHomeCarouselAdVideoUpload',
          'cmsNewsVideoUpload',
          'cmsPromoVideoUpload',
          'cmsEdmVideoUpload',
          'cmsFaqVideoUpload',
          'cmsProjectReserved1VideoUpload'
        ],
        'create': [
          'createCms'
        ],
        'modify': [
          'updateCms',
          'updateAgreeEnableReviewCms',
          'batchUpdateCmsWeight',
          'archiveCms'
        ],
        'delete': [
          'deleteCms'
        ],
        'review': [
          'reviewCms'
        ],
        'enable': [
          'enableCms'
        ]
      },
      'cmsCategory': {
        'display': [
          'cmsNewsCategoryDisplay',
          'cmsPromoCategoryDisplay'
        ],
        'create': [
          'createCmsCategory'
        ],
        'modify': [
          'updateCmsCategory'
        ],
        'delete': [
          'deleteCmsCategories'
        ]
      },
      'linkBlockDeepLinkScheme': {
        'display': [
          'linkBlockDeepLinkSchemeDisplay',
          'linkBlockDeepLinkSchemeGenerateDisplay'
        ],
        'create': [
          'createDeepLinkScheme'
        ],
        'modify': [
          'updateDeepLinkScheme'
        ]
      }
    },
    'sort': 15
  },
  {
    'moduleName': 'menuModule',
    'permissions': {
      'menu': {
        'display': [
          'menuDisplay'
        ],
        'create': [
          'createMenu',
          'createMenuProduct'
        ],
        'modify': [
          'updateMenu',
          'updateMenuProduct'
        ],
        'delete': [
          'deleteMenus',
          'deleteMenuProducts'
        ],
        'review': [
          'reviewMenu'
        ],
        'enable': [
          'enableMenu'
        ]
      }
    },
    'sort': 16
  },
  {
    'moduleName': 'brandModule',
    'permissions': {
      'brandCategory': {
        'display': [
          'brandCategoryDisplay'
        ],
        'create': [
          'createBrandCategory'
        ],
        'modify': [
          'updateBrandCategory'
        ],
        'delete': [
          'deleteBrandCategories'
        ]
      },
      'brand': {
        'display': [
          'brandDisplay'
        ],
        'create': [
          'createBrand',
          'createBatchBrand'
        ],
        'modify': [
          'updateBrand',
          'updateStoreCategories'
        ],
        'delete': [
          'deleteBrands'
        ],
        'review': [
          'reviewBrand'
        ],
        'enable': [
          'enableBrand'
        ]
      },
      'store': {
        'display': [
          'storeDisplay'
        ],
        'create': [
          'createStore',
          'createBatchStore'
        ],
        'modify': [
          'updateStore'
        ]
      },
      'storeAccount': {
        'display': [
          'brandStoreAccountDisplay'
        ],
        'create': [
          'createBrandStoreAccount',
          'quicklyCreateBrandStoreAccount'
        ],
        'modify': [
          'resetBrandStoreAccountPassword',
          'updateBrandStoreAccountStatus',
          'updateBrandStoreAccount'
        ]
      },
      'rolePermissions': {
        'display': [
          'brandStoreAccountRolePermissionsDisplay'
        ],
        'create': [
          'createBrandStoreAccountRole'
        ],
        'modify': [
          'updateBrandStoreAccountRole'
        ]
      }
    },
    'sort': 17
  },
  {
    'moduleName': 'productModule',
    'permissions': {
      'product': {
        'display': [
          'productDisplay'
        ],
        'create': [
          'createProduct',
          'createCategory'
        ],
        'modify': [
          'updateProduct',
          'updateCategory'
        ],
        'delete': [
          'deleteProducts',
          'deleteCategories'
        ]
      },
      'ProductBatch': {
        'display': [
          'searchProductBatches',
          'searchProductBatchCodes'
        ],
        'create': [
          'createProductBatch'
        ],
        'modify': [
          'updateProductBatch'
        ],
        'delete': [
          'invalidProductBatches'
        ],
        'export': [
          'exportProductBatchCodes'
        ],
        'review': [
          'reviewProductBatch'
        ],
        'enable': [
          'enableProductBatch'
        ]
      }
    },
    'sort': 18
  },
  {
    'moduleName': 'synchronizedUploadTransactionModule',
    'permissions': {
      'synchronizedUploadTransaction': {
        'display': [
          'synchronizedUploadTransactionDisplay'
        ]
      }
    },
    'sort': 19
  },
  {
    'moduleName': 'relayModule',
    'permissions': {
      'relayItem': {
        'display': [
          'relayItemDisplay'
        ],
        'create': [
          'createRelayItem',
          'createRelayItemApi'
        ],
        'modify': [
          'updateRelayItem',
          'updateRelayItemApi'
        ],
        'delete': [
          'deleteRelayItems',
          'deleteRelayItemApis'
        ]
      }
    },
    'sort': 20
  },
  {
    'moduleName': 'paymentModule',
    'permissions': {
      'paymentItem': {
        'display': [
          'paymentItemDisplay'
        ],
        'create': [
          'createPaymentItem'
        ],
        'modify': [
          'updatePaymentItem'
        ]
      },
      'paymentServiceProvider': {
        'display': [
          'paymentServiceDisplay'
        ],
        'create': [
          'createPaymentService'
        ],
        'modify': [
          'updatePaymentService',
          'updatePaymentServiceProviderStoreFields'
        ]
      },
      'payment': {
        'display': [
          'paymentDisplay'
        ],
        'refund': [
          'refundPayment',
          'manuallyRefundPayment',
          'rejectRefundPayment',
          'partiallyRefundPayment'
        ],
        'redeem': [
          'redeemPayment'
        ]
      },
      'paymentTaskRecord': {
        'display': [
          'paymentTaskRecordDisplay'
        ]
      },
      'paymentRedeemRecord': {
        'display': [
          'paymentRedeemRecordDisplay'
        ]
      }
    },
    'sort': 21
  },
  {
    'moduleName': 'mobileAppConfigurationModule',
    'permissions': {
      'mobileAppConfiguration': {
        'display': [
          'mobileAppConfigurationDisplay',
          'mobileAppCopywritingDisplay'
        ],
        'create': [
          'createMobileAppConfiguration',
          'createMobileAppCopywriting'
        ],
        'modify': [
          'updateMobileAppConfiguration',
          'updateMobileAppCopywriting'
        ]
      }
    },
    'sort': 22
  },
  {
    'moduleName': 'clientAppKeyModule',
    'permissions': {
      'clientAppKey': {
        'display': [
          'clientAppKeyDisplay'
        ],
        'create': [
          'createClientAppKey'
        ],
        'modify': [
          'updateClientAppKey',
          'updateClientAppKeyEnable'
        ]
      }
    },
    'sort': 23
  },
  {
    'moduleName': 'missionModule',
    'permissions': {
      'missionCategory': {
        'display': [
          'missionCategoryDisplay'
        ],
        'create': [
          'createMissionCategory'
        ],
        'modify': [
          'updateMissionCategory'
        ],
        'delete': [
          'deleteMissionCategories'
        ]
      },
      'mission': {
        'display': [
          'missionDisplay'
        ],
        'create': [
          'createMission'
        ],
        'modify': [
          'updateMission'
        ],
        'delete': [
          'deleteMissions'
        ],
        'review': [
          'reviewMission'
        ],
        'enable': [
          'enableMission'
        ]
      },
      'externalSubMissionType': {
        'display': [
          'externalSubMissionTypesDisplay'
        ],
        'create': [
          'createExternalSubMissionType'
        ],
        'modify': [
          'updateExternalSubMissionType'
        ],
        'delete': [
          'deleteExternalSubMissionTypes'
        ]
      },
      'missionTransactionRecord': {
        'display': [
          'missionTransactionRecordDisplay'
        ]
      },
      'milestoneRewardTransactionRecord': {
        'display': [
          'milestoneRewardTransactionRecordDisplay'
        ]
      },
      'subMissionTransactionRecord': {
        'display': [
          'subMissionTransactionRecordDisplay'
        ]
      },
      'missionReport': {
        'display': [
          'getMilestoneSubMissionTransactionRecordReports',
          'getMissionProgressStatistic'
        ]
      }
    },
    'sort': 24
  },
  {
    'moduleName': 'eventNotificationModule',
    'permissions': {
      'eventNotification': {
        'display': [
          'eventNotificationDisplay'
        ],
        'create': [
          'createEventNotification'
        ],
        'modify': [
          'updateEventNotification'
        ],
        'delete': [
          'deleteEventNotifications'
        ],
        'review': [
          'reviewEventNotification'
        ],
        'enable': [
          'enableEventNotification'
        ]
      },
      'notificationConfiguration': {
        'display': [
          'notificationConfigurationDisplay'
        ]
      },
      'eventNotificationTask': {
        'display': [
          'eventNotificationTaskDisplay',
          'brandStoreAccountEventNotificationTaskDisplay'
        ],
        'modify': [
          'unmaskEventNotificationContent'
        ]
      }
    },
    'sort': 25
  },
  {
    'moduleName': 'saleModule',
    'permissions': {
      'saleActivity': {
        'display': [
          'saleActivityDisplay'
        ],
        'create': [
          'createSaleActivity'
        ],
        'modify': [
          'updateSaleActivity'
        ],
        'delete': [
          'deleteSaleActivities'
        ]
      },
      'saleActivityCategory': {
        'display': [
          'saleActivityCategoryDisplay'
        ],
        'create': [
          'createSaleActivityCategory'
        ],
        'modify': [
          'updateSaleActivityCategory'
        ],
        'delete': [
          'deleteSaleActivityCategories'
        ]
      },
      'saleActivityConfiguration': {
        'display': [
          'saleActivityConfigurationDisplay'
        ],
        'modify': [
          'updateSaleActivityHandlingFeeConfiguration',
          'updateSaleActivityReceiptConfiguration'
        ]
      },
      'voucherSaleActivityOrder': {
        'display': [
          'voucherSaleActivityOrderDisplay'
        ],
        'modify': [
          'issueVouchersByVoucherSaleActivityOrder',
          'voucherSaleActivityOrderRefund',
          'voucherSaleActivityOrderRefundByManually',
          'voucherSaleActivityOrderPartiallyRefund',
          'voucherSaleActivityOrderRejectRefundApplication',
          'voucherSaleActivityOrderIssueCredit',
          'voucherSaleActivityOrderInvalidateReceipt'
        ]
      }
    },
    'sort': 26
  },
  {
    'moduleName': 'receiptModule',
    'permissions': {
      'receiptTool': {
        'display': [
          'receiptToolDisplay'
        ],
        'create': [
          'createReceiptTool'
        ],
        'modify': [
          'updateReceiptTool'
        ]
      },
      'receipt': {
        'display': [
          'receiptDisplay'
        ],
        'modify': [
          'updateReceiptIfInit',
          'updateReceiptIfInvalidationInit',
          'issueReceiptIfUnprocessedOrFailed'
        ],
        'export': [
          'exportReceipt'
        ]
      },
      'credit': {
        'display': [
          'creditDisplay'
        ],
        'modify': [
          'updateCreditIfInit'
        ],
        'export': [
          'exportCredit'
        ]
      }
    },
    'sort': 27
  },
  {
    'moduleName': 'subscriptionModule',
    'permissions': {
      'subscription': {
        'display': [
          'subscriptionActivityDisplay'
        ],
        'create': [
          'createSubscriptionActivity',
          'createSubscriptionProgramAndPrivilege'
        ],
        'modify': [
          'updateSubscriptionActivity',
          'updateSubscriptionProgramAndPrivilege'
        ],
        'delete': [
          'deleteActivities',
          'deleteSubscriptionProgramAndPrivileges'
        ],
        'review': [
          'reviewSubscriptionProgram'
        ],
        'enable': [
          'enableSubscriptionProgram'
        ]
      },
      'subscriptionProgramContract': {
        'display': [
          'subscriptionProgramContractDisplay',
          'subscriptionProgramContractOrderDisplay'
        ],
        'modify': [
          'subscriptionProgramContractOrderRefundByManually',
          'subscriptionProgramContractOrderIssueCredit',
          'subscriptionProgramContractOrderInvalidateReceipt'
        ]
      },
      'subscriptionConfiguration': {
        'display': [
          'subscriptionConfigurationDisplay'
        ],
        'modify': [
          'updateSubscriptionHandlingFeeConfiguration',
          'updateSubscriptionReceiptConfiguration',
          'updateSubscriptionRenewalConfiguration'
        ]
      }
    },
    'sort': 28
  },
  {
    'moduleName': 'shopModule',
    'permissions': {
      'menu': {
        'display': [
          'shopMenuDisplay'
        ],
        'create': [
          'createShopMenu',
          'createShopMenuShopMerchandises',
          'createAdditionalShopMerchandise',
          'copyShopMenu'
        ],
        'modify': [
          'updateShopMenu',
          'updateShopCategories'
        ],
        'delete': [
          'deleteShopMenus',
          'deleteShopMenuShopMerchandises',
          'deleteAdditionalMerchandises'
        ]
      },
      'merchandise': {
        'display': [
          'merchandiseDisplay'
        ],
        'create': [
          'createShopMerchandise'
        ],
        'modify': [
          'updateShopMerchandise'
        ],
        'delete': [
          'deleteShopMerchandises'
        ],
        'review': [
          'reviewShopMerchandise'
        ],
        'enable': [
          'enableShopMerchandise'
        ]
      },
      'merchandiseItem': {
        'display': [
          'merchandiseItemDisplay'
        ],
        'create': [
          'createShopMerchandiseItem'
        ],
        'modify': [
          'updateShopMerchandiseItem'
        ],
        'delete': [
          'deleteShopMerchandiseItems'
        ],
        'review': [
          'reviewShopMerchandiseItem'
        ],
        'enable': [
          'enableShopMerchandiseItem'
        ]
      },
      'merchandiseSpec': {
        'display': [
          'shopMerchandiseSpecDisplay'
        ],
        'create': [
          'createShopMerchandiseSpec'
        ],
        'modify': [
          'updateShopMerchandiseSpec'
        ],
        'delete': [
          'deleteShopMerchandiseSpecs'
        ],
        'review': [
          'reviewShopMerchandiseSpec'
        ],
        'enable': [
          'enableShopMerchandiseSpec'
        ]
      },
      'merchandiseCategory': {
        'display': [
          'shopMerchandiseCategoryDisplay'
        ],
        'modify': [
          'updateShopMerchandiseCategory'
        ],
        'delete': [
          'deleteShopMerchandiseCategories'
        ]
      },
      'shopConfiguration': {
        'display': [
          'shopConfigurationDisplay'
        ],
        'modify': [
          'updateShopMainConfiguration'
        ]
      },
      'shopBrandConfiguration': {
        'display': [
          'shopBrandConfigurationDisplay'
        ],
        'create': [
          'createShopBrandConfiguration'
        ],
        'modify': [
          'updateShopBrandConfiguration'
        ]
      },
      'shopOrder': {
        'display': [
          'shopOrderDisplay'
        ],
        'modify': [
          'shopOrderRefund',
          'shopOrderRefundByManually',
          'shopOrderPartiallyRefund',
          'shopOrderRetryRefund'
        ]
      },
      'shopOrderExtraColumnKey': {
        'display': [
          'shopOrderExtraColumnKeyDisplay'
        ],
        'create': [
          'createShopOrderExtraColumnKey'
        ],
        'modify': [
          'updateShopOrderExtraColumnKey'
        ],
        'delete': [
          'deleteShopOrderExtraColumnKey'
        ]
      },
      'pointDiscountRule': {
        'display': [
          'pointDiscountRuleDisplay'
        ],
        'create': [
          'createShopPointDiscountRule'
        ],
        'delete': [
          'deleteShopPointDiscountRules'
        ]
      },
      'shopScheduledPromotionalActivity': {
        'display': [
          'getShopScheduledPromotionalActivity',
          'searchShopScheduledPromotionalActivities'
        ],
        'create': [
          'createShopScheduledPromotionalActivity'
        ],
        'modify': [
          'updateShopScheduledPromotionalActivity'
        ],
        'delete': [
          'deleteShopScheduledPromotionalActivities'
        ]
      },
      'shopMemberTicketPromotionalActivity': {
        'display': [
          'getShopMemberTicketPromotionalActivity',
          'searchShopMemberTicketPromotionalActivities'
        ],
        'create': [
          'createShopMemberTicketPromotionalActivity'
        ],
        'modify': [
          'updateShopMemberTicketPromotionalActivity'
        ],
        'delete': [
          'deleteShopMemberTicketPromotionalActivities'
        ]
      },
      'saleLimits': {
        'display': [
          'getShopMerchandiseSaleLimit',
          'searchShopMerchandiseSaleLimits'
        ],
        'create': [
          'createShopMerchandiseSaleLimit'
        ],
        'modify': [
          'updateShopMerchandiseSaleLimit'
        ],
        'delete': [
          'deleteShopMerchandiseSaleLimits'
        ]
      },
      'storeConfigurationSetting': {
        'display': [
          'storeConfigurationSettingDisplay'
        ],
        'create': [
          'createShopStoreHolidayServiceSetting',
          'createShopStoreSuspendServiceSetting'
        ],
        'modify': [
          'updateShopWeekdayServiceSetting',
          'updateShopStoreHolidayServiceSetting',
          'updateShopStoreSuspendServiceSetting',
          'updateShopStoreTodayServiceStatus',
          'updateShopStoreReplenishTimeServiceSetting',
          'updateShopStoreOverMinutesServiceSetting',
          'updateShopStoreMerchandisesAvailableStatusSettings',
          'updateShopStoreMerchandiseItemsStockStatus',
          'updateShopStoreMerchandiseItemSpecOptionsStockStatus'
        ],
        'delete': [
          'deleteShopStoreHolidayServiceSettings',
          'deleteShopStoreSuspendServiceSetting'
        ]
      }
    },
    'sort': 29
  },
  {
    'moduleName': 'logisticModule',
    'permissions': {
      'tool': {
        'display': [
          'logisticToolDisplay'
        ],
        'create': [
          'createLogisticTool'
        ],
        'modify': [
          'updateLogisticTool'
        ],
        'delete': [
          'deleteLogisticTool'
        ]
      },
      'order': {
        'display': [
          'logisticOrderDisplay'
        ]
      }
    },
    'sort': 30
  },
  {
    'moduleName': 'homeDeliveryOrderModule',
    'permissions': {
      'order': {
        'display': [
          'homeDeliveryOrderDisplay'
        ],
        'modify': [
          'updateHomeDeliveryOrder'
        ]
      }
    },
    'sort': 31
  },
  {
    'moduleName': 'thirdPartyModule',
    'permissions': {
      'thirdParty': {
        'display': [
          'thirdPartyDisplay'
        ]
      }
    },
    'sort': 32
  },
  {
    'moduleName': 'tagModule',
    'permissions': {
      'tag': {
        'display': [
          'tagDisplay'
        ],
        'create': [
          'createTag',
          'addMemberToTagMemberList',
          'addMemberListToTagMemberList'
        ],
        'modify': [
          'updateTag'
        ],
        'delete': [
          'deleteTags',
          'deleteTagMemberListBatchRows',
          'deleteMembersFromMemberList'
        ],
        'export': [
          'exportTagMemberList'
        ]
      }
    },
    'sort': 33
  },
  {
    'moduleName': 'regularCustomerModule',
    'permissions': {
      'board': {
        'modify': [
          'updateBoardsByMappingCode'
        ]
      },
      'order': {
        'display': [
          'regularCustomerOrderDisplay'
        ],
        'modify': [
          'refundRegularCustomerOrder',
          'retryRefundRegularCustomerOrder',
          'refundManuallyRegularCustomerOrder'
        ]
      },
      'configuration': {
        'display': [
          'regularCustomerConfigurationDisplay'
        ],
        'modify': [
          'updateRegularCustomerReceiptConfiguration'
        ]
      }
    },
    'sort': 34
  },
  {
    'moduleName': 'externalLinkConfigModule',
    'permissions': {
      'webhookConfig': {
        'display': [
          'searchWebhookConfigs',
          'findWebhookConfig'
        ],
        'create': [
          'createWebhookConfig'
        ],
        'modify': [
          'updateWebhookConfig'
        ],
        'delete': [
          'deleteWebhookConfigs'
        ],
        'retry': [
          'retrySendWebhook'
        ]
      }
    },
    'sort': 35
  },
  {
    'moduleName': 'thirdPartyOrderModule',
    'permissions': {
      'order': {
        'display': [
          'searchThirdPartyOrder',
          'searchThirdPartyOrderTransaction'
        ],
        'modify': [
          'refundThirdPartyOrder'
        ]
      }
    },
    'sort': 36
  }
]