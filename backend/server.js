const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// API giả lập dữ liệu Dashboard KPIs (Giúp bạn test giao diện ngay lập tức)
app.get('/api/dashboard/kpis', (req, res) => {
    res.json({
        success: true,
        data: {
            totalIncome: 20000000,
            totalExpense: 6800000,
            balance: 13200000,
            savingsRate: 34.0
        }
    });
});

// API danh sách giao dịch mẫu
app.get('/api/transactions', (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, category: 'Lương', amount: 20000000, type: 'INCOME', date: '2026-10-01', description: 'Lương tháng 10' },
            { id: 2, category: 'Ăn uống', amount: 1500000, type: 'EXPENSE', date: '2026-10-02', description: 'Ăn uống cuối tuần' },
            { id: 3, category: 'Thuê nhà', amount: 5000000, type: 'EXPENSE', date: '2026-10-03', description: 'Tiền nhà tháng 10' }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});