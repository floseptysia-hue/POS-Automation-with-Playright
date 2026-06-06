export class FinancialCalculator {

  static calculateNetworkFee(
    amount: number,
    networkFeePercent: number
  ): number {

    return Math.round(
      (amount * networkFeePercent) / 100
    );

  }

  static calculatePaymentFee(
    amount: number,
    paymentFeePercent: number
  ): number {

    return Math.round(
      (amount * paymentFeePercent) / 100
    );

  }

  static calculateMargin(
    amount: number,
    networkFeePercent: number,
    paymentFeePercent: number,
    serviceFee: number
  ): number {

    const networkFee =
      this.calculateNetworkFee(
        amount,
        networkFeePercent
      );

    const paymentFee =
      this.calculatePaymentFee(
        amount,
        paymentFeePercent
      );

    return (
      paymentFee +
      serviceFee -
      networkFee
    );
  }
}