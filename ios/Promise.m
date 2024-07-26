#import "Promise.h"

@implementation Promise

-(instancetype)initWithResolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    self = [super init];
    self.reject = reject;
    self.resolve = resolve;
    return self;
}

@end
