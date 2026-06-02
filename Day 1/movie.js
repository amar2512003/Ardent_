const calculateTicketCost = (pricePerTicket, ticketCount) => {
    const finalAmount = pricePerTicket * ticketCount;

    return finalAmount;
};

module.exports = calculateTicketCost;